# Homepage reference measurements

October 1 age-16 paragraph spacing: Matthew’s supplied 512 × 298 screenshot has regular text starting at image rows 80 and 134, with the separated closing text at row 218. At its 2× display scale, these 54px/84px steps correspond to 27px CSS line height and a 15px extra gap before the closing line. Age 16 now uses 15px type with line-height 1.8 and a 15px closing margin. Its existing age label retains 27px line height and 15px bottom margin. Ages 12 and 15 keep the 21px bullet line height. The section heading now reads “SO FAR:”.

Latest October 1 adjustment: the navigation is now constrained to the same centered 650px outer width as the content, with matching 32px desktop/24px mobile gutters. Its vertical padding is 8px, and the column starts 32px below the header at all widths. Home is a visible fourth label with the same current-page underline. Mobile link gaps are 12px, reducing to 8px at widths up to 360px to keep all four labels on one row. This supersedes the earlier full-width header and larger title gap described below.

Later October 1 adjustment: Work and Timeline now have separate routes using the same `PortfolioPage` shell, font and column. The header links to `/work` and `/timeline`, indicates the current page, and the square returns home. The local font declaration moved from `app/page.tsx` to `components/portfolio-page.tsx`; the font asset and its license are unchanged.

October 1 adjustment: Matthew requested the reference’s wide navigation above the column. The homepage now has a 20px crimson square with a 44px link target, uppercase Work/Timeline/LinkedIn links in Geist 13px/600 (12px on mobile), and 40px desktop/24px mobile header gutters. The content column now has 64px top padding after the header, or 48px on mobile. The measurements below retain the original September 30 comparison; its 96px/80px top insets predate this navigation.

Matthew requested matching the font, size and positioning of [Aryan Shah’s page](https://www.aryanshah.me/), while retaining his own timeline. The live page was inspected September 30, 2026. Values below come from computed styles and the public stylesheets, including Markdown-renderer overrides that differ from the outer page rules.

| Element | Measured value |
| --- | --- |
| Font | Geist variable, weights 100–900 |
| Page column | 650px maximum border-box width, centred |
| Desktop padding | 96px top, 32px sides, 64px bottom |
| At widths ≤768px | 80px top, 24px sides, 48px bottom |
| Page heading | 20px, weight 700, line height 32px, letter spacing 1px, uppercase |
| Heading separator | 0.5px border, 32px padding above and 32px margin below |
| Introduction | 15px, weight 500, line height 27px |
| Section heading | 18px, weight 600, line height 32.4px, letter spacing 0.9px, uppercase |
| Age label | 15px, weight 700, line height 27px, 15px gap before bullets |
| Bullets | 15px, weight 500, line height 21px, no extra gap between items |
| List positioning | 24px left margin plus 22.5px item padding; bullet at the list’s left edge |
| Chapter separators | 0.5px rules with 32px spacing on either side |
| Background / text | #f8f5ef / #3a3a3a |
| Divider colour | rgba(58,58,58,0.3) |

The reference’s outer section-heading rule is overridden by its Markdown renderer, producing 18px/600 rather than 16px/700. Its list renderer likewise sets 21px line height and removes item margins. Fractional border widths can rasterize differently with device pixel ratio; the declared width remains 0.5px.

The exact Latin font asset comes from `https://www.aryanshah.me/_next/static/media/caa3a2e1cccd8315-s.p.853070df.woff2`. Its SHA-256 is `a29f900a6d603e989449327956e7ac61ea3e6b26ca7426f64e7cccf2cd4aed37`. Geist is licensed under the SIL Open Font License 1.1; the license was obtained from the [official Google Fonts distribution](https://github.com/google/fonts/blob/main/ofl/geist/OFL.txt) and is included beside the font. No reference-site content, tracking code or branding is copied.

The homepage uses these measurements with Matthew’s own introduction and age bullets. Different text and numbers of bullets produce different chapter heights. The work list and complete timeline remain below; project pages retain their existing layout and fonts. The reference’s fixed navigation and separate product introduction have no corresponding new content on Matthew’s homepage.
