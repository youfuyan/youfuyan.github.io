import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { createGzip } from "node:zlib";

const root = join(process.cwd(), "out");
const port = Number(process.env.PORT ?? 3000);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

function resolvePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0] ?? "/");
  const safePath = normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const candidate = join(root, safePath);

  if (existsSync(candidate) && statSync(candidate).isFile()) {
    return candidate;
  }

  const indexFile = join(root, safePath, "index.html");
  if (existsSync(indexFile)) {
    return indexFile;
  }

  const htmlFile = join(root, `${safePath}.html`);
  if (existsSync(htmlFile)) {
    return htmlFile;
  }

  const notFound = join(root, "404.html");
  return existsSync(notFound) ? notFound : null;
}

createServer((request, response) => {
  const filePath = resolvePath(request.url ?? "/");

  if (!filePath) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  const extension = extname(filePath);
  const statusCode = filePath.endsWith("404.html") && request.url !== "/404.html" ? 404 : 200;
  const acceptsGzip = request.headers["accept-encoding"]?.includes("gzip");
  const shouldCompress = acceptsGzip && [".html", ".css", ".js", ".json", ".svg", ".txt", ".xml"].includes(extension);

  response.writeHead(statusCode, {
    "content-type": types[extension] ?? "application/octet-stream",
    ...(shouldCompress ? { "content-encoding": "gzip" } : {}),
  });
  const stream = createReadStream(filePath);
  if (shouldCompress) {
    stream.pipe(createGzip()).pipe(response);
    return;
  }
  stream.pipe(response);
}).listen(port, "127.0.0.1", () => {
  console.log(`Static preview running at http://127.0.0.1:${port}`);
});
