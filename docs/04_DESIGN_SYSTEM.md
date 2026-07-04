# Design system

## Direction

Quiet, technical, precise, and modern.

The visual tone should feel closer to a strong engineering case-study site than
a colorful developer template.

## Layout

- maximum content width: 1120–1200px
- reading width for long-form pages: 680–760px
- generous vertical spacing
- responsive from 375px upward
- sticky header only if it does not reduce mobile usability

## Typography

Use a fast system stack.

Suggested:
- Sans: `Inter`, `ui-sans-serif`, system fonts, or a locally installed equivalent
- Mono: `ui-monospace`, `SFMono-Regular`, `Menlo`, `Consolas`

Do not depend on a remote font request for the page to look correct.

## Color

Use neutral surfaces and one restrained accent.

Suggested tokens:

- background: near-white
- foreground: near-black
- muted: neutral gray
- border: light neutral gray
- accent: deep blue or indigo
- accent-soft: very light tint
- success/metric highlight: use sparingly

Support dark mode only if it is implemented cleanly without delaying v1.

## Components

### Case-study card

Must show:
- category
- title
- one-sentence outcome
- 2–4 tags
- link

### Impact metric

Must show:
- number or award
- plain-language qualifier
- no count-up animation

### Tags

Use for context, not keyword stuffing. Limit visible tags.

## Motion

- subtle hover and focus transitions only
- no page-load splash animation
- no parallax
- no typing animation
- no animated skill bars
- honor `prefers-reduced-motion`

## Imagery

Preferred:
- real project screenshots
- public paper figures
- simple original diagrams
- professional headshot

Avoid:
- generic AI brain art
- stock laptop photos
- cartoon programmer animations
- decorative 3D blobs

When assets are unavailable, use strong typography and layout rather than filler.
