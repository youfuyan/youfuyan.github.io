# Design reference study

Reviewed July 2026:

- [Rezky P. Budihartono](https://www.rezky.codes/?ref=darkmodedesign)
- [Salt&Bits](https://saltandbits.com/en)
- [Upclose Studio news](https://upclose.studio/news)

The goal of this study is not to reproduce any one site. It identifies patterns
that strengthen Youfu's recruiter-focused portfolio without weakening content
clarity, accessibility, performance, or public-safety constraints.

## Rezky: technical identity and immediate proof

### What works

- A dark first viewport establishes a clear technical personality immediately.
- A small availability/status label creates a strong entry point before the name.
- The hero places role, supporting copy, actions, and proof metrics in one scan.
- The active navigation state is visible, and link feedback is quick.
- Project interactions coordinate border, image, heading, and arrow changes.

### What not to copy

- The animated availability ping and shimmering text add motion without helping a
  recruiter understand the work.
- The coding illustration is visually specific but would position Youfu as a
  generic web developer rather than a production AI/backend engineer.
- Several broad transitions animate more properties and for longer than needed.

### Adaptation

- Use a dark hero with a static status marker and immediate production-impact proof.
- Keep the factual headline as the dominant signal.
- Coordinate project hover feedback, but limit it to border, color, and transform.

### Source-level implementation notes

- The projects header combines a `tsparticles` canvas (`particleDensity: 50`,
  `minSize: 0.6`, `maxSize: 1.4`) with a separate 100px SVG grid.
- The grid is masked toward the upper-right corner, keeping texture away from the
  primary reading area.
- Scroll reveals use Framer Motion with an initial 28px vertical offset, 0 opacity,
  a 650ms duration, and reduced-motion detection.
- Project cards coordinate a mint border, subtle lift and shadow, 1.05 image scale,
  title color, and arrow rotation on the parent `group` hover state.
- For this portfolio, the canvas dependency is replaced by a static-export-friendly
  SVG grid and delivery trace. The trace visualizes real ownership phases rather
  than presenting decorative values as analytics.

## Salt&Bits: framing, asymmetry, and controlled reveals

### What works

- A thin page frame makes the viewport feel deliberately composed.
- Hairline dividers create structure without relying on floating cards.
- Large media blocks and asymmetric grids create rhythm across a long page.
- The restrained dark palette lets spacing and imagery carry the design.
- Content appears in a staged sequence rather than all at once.

### What not to copy

- The split text/media hero conflicts with this portfolio's hero requirements.
- Some 1.2-second width and frame transitions feel cinematic rather than responsive.
- The project mosaic depends on extensive public photography. Amazon project
  screenshots and internal artifacts cannot be substituted with invented imagery.

### Adaptation

- Use hairline framing and grid dividers across proof, work, and focus sections.
- Use a short first-load reveal only in the hero.
- Create visual rhythm with typography and geometry until verified media is supplied.

## Upclose: editorial hierarchy and fast interaction

### What works

- A serif display face, monospace labels, and neutral body type create clear roles.
- The outer margin and vertical dividers make the project grid feel editorial.
- Square project media and consistent columns make scanning predictable.
- Navigation feedback is very fast (roughly 80ms), while image opacity changes are
  slower (roughly 300ms), matching the visual weight of each element.
- Mobile collapses the grid into a direct single-column reading order.

### What not to copy

- Long project descriptions are appropriate for a studio feed but too slow for a
  recruiter landing page.
- A fully dark long-form resume or case study would reduce reading comfort.
- Image-led cards cannot be reproduced honestly without public-safe source media.

### Adaptation

- Pair monospace evidence labels with serif section titles and sans-serif body copy.
- Replace rounded, lifted cards with a divided editorial grid.
- Use 120-180ms feedback for navigation and project borders, and a 160ms mobile menu.
- Keep long-form pages light for sustained readability.

## Resulting design rules

1. The first viewport is dark, direct, and evidence-led.
2. Long-form content remains light and highly readable.
3. Hairline dividers provide structure; shadows are exceptional rather than default.
4. Labels use monospace; major section titles use a restrained serif display face.
5. Repeated project cards do not lift. Hover changes background, border, title, and
   directional cue together.
6. Initial hero motion may use a short stagger. Repeated navigation stays fast.
7. All movement uses opacity or transform and respects `prefers-reduced-motion`.
8. No private screenshot, internal diagram, or invented product image is introduced.

## Three.js reference study

Reviewed July 2026:

- [THREE.js particle stream](https://codepen.io/zadvorsky/pen/qOYqGv)
- [Procedurally generated minimal environment](https://codepen.io/marctannous/pen/RNGjmz)
- [WebGL Smoke](https://codepen.io/teolitto/pen/KwOVvL)

### What the examples do

- The particle stream sends 100,000 plane prefabs through cubic Bezier curves. Its
  vertex shader calculates position, rotation, time offset, and color on the GPU.
- The procedural environment creates a 256 by 256 simplex-noise height map, converts
  it to a wireframe plane, adds fog and lighting, and rotates the mesh continuously.
- The smoke example places 150 transparent textured planes at randomized depths and
  slowly rotates every plane with additive-style visual blending.

### Portfolio adaptation

- Only the particle-stream idea maps cleanly to Youfu's work: it can suggest events
  moving through a distributed system without presenting invented telemetry.
- The portfolio uses 420 `THREE.Points` particles on one Catmull-Rom path rather
  than 100,000 animated plane meshes. This keeps draw calls and geometry small.
- Three.js loads lazily on desktop. Mobile and reduced-motion visitors keep the SVG
  fallback and do not initialize WebGL.
- Rendering pauses while the hero is off-screen or the document is hidden. Geometry,
  material, observers, listeners, and renderer resources are disposed on unmount.
- Pointer movement changes the point-cloud angle slightly on fine-pointer desktops;
  the scene remains non-interactive and never blocks links or text selection.
