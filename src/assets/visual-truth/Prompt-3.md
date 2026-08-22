Do NOT rebuild the application from scratch.

Do NOT change the overall architecture, page structure, interaction concept, or existing functionality.

This is a refinement pass on the CURRENT implementation.

The attached reference screenshots are the visual source of truth.

Your task is to compare the CURRENT implementation against the reference screenshots and make the existing implementation visually much closer to the references.

IMPORTANT:
Preserve everything that is currently working, especially:

- The two-page architecture
- Page 1 → Page 2 transition
- Dragging/sliding interaction
- Couple reunion animation
- Start Over functionality
- Page 2 scrolling
- Music player
- Calendar functionality
- Map links
- Responsive behavior

Do not replace working functionality with simplified alternatives.

VISUAL REFINEMENT PRIORITY

Work through these areas systematically:

1. PAGE 1 COMPOSITION

Match the reference screenshot's:

- Exact title position
- Title size
- Title font
- Subtitle position
- Date position
- Couple positioning
- Groom scale
- Bride scale
- Heart size
- Heart position
- Couple labels
- Timeline position
- Timeline thickness
- Center avatar size
- Left/right label positions
- Overall vertical spacing

The current implementation should feel almost like the reference screenshot was reproduced directly.

Do not approximate the layout using generic flexbox spacing if more precise positioning is necessary.

Use viewport-relative and responsive positioning where appropriate.

2. COLORS

Compare the current colors against the reference.

The reference uses a very soft:

- Ivory paper background
- Muted champagne gold
- Warm brown typography
- Very subtle cream decorative elements

Do not make the gold bright yellow.

Do not make the background pure white.

Do not introduce additional colors.

3. TYPOGRAPHY

Typography needs to be extremely close to the reference.

The main:

"Shuhair & Hadiya"

should have a sophisticated high-contrast luxury serif appearance.

The smaller names and decorative text should use elegant serif/script typography.

Do not use generic modern sans-serif typography for the major invitation elements.

Adjust:

- font family
- font weight
- font size
- letter spacing
- line height
- opacity
- color

until they visually match the reference.

4. BACKGROUND

The background should resemble luxury invitation paper.

Add/refine:

- extremely subtle paper texture
- very faint circular decorative shapes
- subtle cream variations

The background must remain almost white/ivory.

The texture should not be obvious.

5. COUPLE ILLUSTRATIONS

The groom and bride must visually match the supplied reference as closely as possible.

Pay attention to:

- scale
- position
- vertical alignment
- distance between them
- opacity
- illustration style

Do not replace them with generic avatars.

6. DRAG INTERACTION

Do NOT redesign the interaction.

Keep the existing interaction.

Improve only its visual/physical feel:

- smooth pointer tracking
- natural movement
- proper drag constraints
- subtle scale while dragging
- smooth return when released early
- smooth reunion when threshold is reached

The interaction should feel like physically bringing the two characters together.

Do not turn it into a click interaction.

7. REUNION ANIMATION

The transition should be subtle and elegant.

When the couple reaches the threshold:

- smoothly bring both characters together
- subtly emphasize the heart
- allow the couple to settle
- crossfade into Page 2

Avoid flashy transitions.

No bounce.
No excessive zoom.
No confetti.
No particle explosion.

8. PAGE 2

Compare the current Page 2 against the reference.

Prioritize:

- invitation card width
- invitation card height
- card position
- card shadow
- border
- ornamental header
- typography
- floral artwork
- QR code placement
- spacing between invitation and location sections
- location panel proportions
- Save the Date panel
- closing quote
- final spacing

The invitation card should be the visual centerpiece.

9. ORNAMENTAL ARTWORK

The ornate Islamic pattern at the top of the invitation card is important.

It should look intricate and delicate.

Do not replace it with a generic CSS border.

If the current asset is poor, improve the asset itself rather than changing the design.

10. RESPONSIVE

Do not break desktop while improving mobile.

Check:

- 1440px desktop
- 1280px desktop
- 1024px tablet
- 768px tablet
- 390px mobile
- 360px mobile

The mobile version should preserve the same visual identity and interaction.

FINAL RULE:

Make the SMALLEST set of code changes necessary to achieve a much closer visual match.

Do not rewrite components unnecessarily.

Do not add new sections.

Do not change the content.

Do not change the wedding names or dates.

Do not change the two-page interaction.

After making the changes, inspect the result again and perform one additional visual correction pass.