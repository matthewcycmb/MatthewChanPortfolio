# Konvo phone cutout

Output: `public/images/konvo-phone-cutout.webp`, 900 × 600, lossless WebP with transparency.

Mode: built-in image editing tool, background extraction. Only the returned alpha channel is used, resized to the original dimensions and joined with the original screenshot’s RGB pixels. Generated screen pixels are discarded, preserving the supplied text, photos, battery values and UI. The page supplies the soft drop shadow through CSS.

## Final prompt

Use case: background-extraction. Edit target: the supplied 900 x 600 PNG containing three existing Konvo iPhone mockups on a flat lavender background. Remove ONLY the lavender background outside the three phone silhouettes, including the gaps between the phones, and replace it with a genuinely transparent alpha channel. Preserve all three phones exactly: same positions, scale, outlines, bezels, edge pixels, screen content, photos, names, numbers, icons and all UI text. Do not regenerate, redraw, retouch, enhance, restyle or invent any screen content. Keep the same 3:2 canvas composition and full phone silhouettes. No added shadows, text, framing, checkerboard pattern, gradients or coloured background. This is background removal from an existing real product artifact, not a new UI mockup.
