# Diwen portfolio study

Inspected September 26, 2026. This is a design and editorial analysis, not verification of the reference’s achievements.

## Homepage

The [homepage](https://diwen.dev/) is a small index. One personal paragraph leads to work and highlights; each row is a thumbnail pile, a title and a right-aligned date. Photographs add personality without making the introduction large.

Measured at a 1440px viewport:

| Detail | Observed treatment | Matthew’s implementation |
| --- | --- | --- |
| Reading column | 510px | 510px |
| Introduction | Inter, 14px, about 20px line height | Locally served Inter, 14px / 1.45 |
| Work rows | 52px tall; 60 × 36px thumbnail area | Same proportions |
| Heading | Fraunces italic, 19px, medium weight | Locally served Fraunces |
| Name | Custom handwritten type | Open-source Dancing Script; Matthew’s own name |
| Colors | Warm paper, brown text, muted dates | Matching palette; secondary text checked for contrast |
| Photos | White borders, small shadows, differing angles | Real public-safe images; slight fan on hover/focus |

At a 390px phone width, the reference uses a 350px column, retains compact text and fits its images inside the viewport. Our layout uses similar side margins and has separate mobile sizing for the demo and photo viewer.

The original handwritten font’s licensing was not established. Its font file, personal photos, source code and copy were not reused. The new fonts carry their own licenses in app/fonts/.

## Project pages

[Smashspeed](https://diwen.dev/work/smashspeed) starts with a framed cover, title, role/date and link. The story then alternates actual artifacts with short paragraphs. The images do much of the explaining: an early attempt, a constraint, a change, then a result. It does not put a large heading above every point. Our earlier version had too much duplicated explanation and decorative structure.

[Clutch](https://diwen.dev/work/clutch) follows the same rhythm. Its visible prose blocks ranged from 8 to 58 words in the sampled page. It puts a failure and subsequent technical change beside the relevant images, then distinguishes later work from early prototypes.

[Solace](https://diwen.dev/work/solace) uses a mix of product imagery, design work and manufacturing photos to connect software to shipped hardware. It credits a collaborator where their work appears. The [Startup School page](https://diwen.dev/highlights/yc-startup-school) applies the same layout to event photos and brief personal observations.

On the reference, a project opened from the homepage uses a scrollable overlay and a circular back control. A direct URL also works. Matthew’s pages keep normal routes and browser history, with the same small back control. Photos are accessible links with optional native-dialog enlargement, keyboard dismissal and no-JavaScript fallbacks.

## Changes made

- Closer widths, typography, spacing, row sizes and photo borders.
- Actual multiple-photo piles instead of an empty paper-stack effect.
- A compact timeline remains Matthew’s own addition.
- Konvo is a cover, short introduction, six photo-ready entries and links. Each entry is two or three sentences. Technical diagrams and repeated headings were removed.
- Each entry has a photos array. An empty array leaves no public blank panel; the local preview can show a small editorial note.
- Real portrait, product, project and Roblox assets are retained. Missing early screenshots, swipe recordings, designer comparisons and launch-post evidence remain missing.

## What would make it stronger

The reference works because there are distinct artifacts for distinct moments. Typography alone cannot supply that. Matthew’s next useful additions are an early Konvo screenshot, a redacted swipe clip, the original launch post and a Smii team/demo photo. The current portrait comes from the Konvo submission and is labeled accordingly. No supplied image is relabeled as a childhood or hackathon photo.
