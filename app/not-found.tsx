import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { routes } from "@/lib/routes";

export default function NotFound() {
  return (
    <div className="interior-page">
      <PageHeader
        eyebrow="404"
        title="This route does not exist."
        description="The useful paths are still here: production systems, research, experience, and contact."
        index="NOT FOUND"
        signal="RETURN TO KNOWN STATE"
      />
      <section className="site-section">
        <div className="page-shell">
          <Link href={routes.home} className="site-primary-button pressable">
            Go home <span aria-hidden="true">←</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
