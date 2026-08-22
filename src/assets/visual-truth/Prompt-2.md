Recreate the attached wedding invitation website as an EXACT two-page interactive experience.

IMPORTANT:
This is NOT a single long scrolling webpage.

There are TWO distinct pages/screens.

PAGE 1 = Interactive couple introduction / opening screen.

PAGE 2 = Wedding invitation details screen.

The third reference screenshot showing the groom and bride avatars closer together is NOT a third page. It is an INTERACTION STATE of Page 1.

The user physically drags/slides the couple avatars toward the center. When the interaction reaches the required threshold, the couple moves together, the opening animation completes, and PAGE 2 is revealed.

The attached screenshots are the PRIMARY VISUAL SOURCE OF TRUTH.

Do not redesign the interface.
Do not convert it into a normal scrolling wedding website.
Do not add unrelated sections.
Reproduce the interaction and visual composition shown in the references.

==================================================
TECH STACK
==================================================

Use:

- React
- Vite
- JavaScript
- Tailwind CSS where useful
- Modern CSS
- Framer Motion for animation
- Lucide React Icons where appropriate

DO NOT use TypeScript.

Create a clean component-based React application.

The application should behave like an interactive digital invitation rather than a normal website.

==================================================
OVERALL EXPERIENCE
==================================================

The experience is:

INITIAL LOAD
↓
PAGE 1
↓
USER DRAGS THE COUPLE / AVATARS TOWARD EACH OTHER
↓
COUPLE APPROACHES CENTER
↓
THRESHOLD IS REACHED
↓
COUPLE COMPLETES THE ANIMATION
↓
PAGE 1 TRANSITION
↓
PAGE 2
↓
USER CAN SCROLL THROUGH WEDDING DETAILS
↓
"START OVER" RETURNS TO PAGE 1

There should be NO normal navigation bar.

There should be NO visible "Next" button.

The transition from Page 1 to Page 2 should happen through the interaction itself.

==================================================
PAGE 1 — OPENING EXPERIENCE
==================================================

Recreate the first supplied screenshot extremely closely.

The entire viewport is a warm ivory / cream invitation-paper background.

The page should fill the viewport.

Do not make Page 1 a normal vertically scrolling section.

It should initially behave like a full-screen landing scene.

--------------------------------------------------
BACKGROUND
--------------------------------------------------

Use a warm ivory paper background.

Suggested starting colors:

#F8F3E8
#FBF8F1
#C9A35A
#E5D1A4
#A77D35
#6F6253

Do not use saturated yellow gold.

The gold should look like muted champagne / antique gold.

Add a very subtle paper/grain texture.

The texture should resemble premium physical invitation paper.

Add very subtle translucent circular decorative elements throughout the background.

These circles should look like faint decorative embossed shapes rather than normal bubbles.

They should have extremely low opacity.

Some can gently float.

--------------------------------------------------
TOP TITLE
--------------------------------------------------

At the top center:

"Shuhair & Hadiya"

Use a sophisticated luxury display serif similar to:

Didot
Bodoni
Cormorant Garamond

Use a high-contrast elegant serif.

The title should be large and delicate.

Below:

"Are getting married!"

Then:

"✧ September 1 - 2, 2026 ✧"

Use champagne gold / warm brown.

Match the screenshot's typography scale and vertical spacing.

Do not use generic wedding fonts.

--------------------------------------------------
COUPLE
--------------------------------------------------

The groom and bride are the main interactive elements.

GROOM:

Position initially toward the left-center area.

Illustrated full-body male avatar.

Appearance:

- Black tuxedo
- White shirt
- Black bow tie
- Dark hair
- Beard
- Elegant friendly expression
- Full body
- Standing upright

BRIDE:

Position initially toward the right-center area.

Illustrated full-body Muslim bride.

Appearance:

- White hijab
- White wedding dress
- Bouquet
- Full body
- Elegant soft illustration
- Standing upright

The illustrations should visually resemble the supplied reference screenshots.

Do not use photorealistic people.

Do not use generic emoji avatars.

Do not replace them with arbitrary stock illustrations.

If necessary, create original illustration assets matching the reference style.

--------------------------------------------------
CENTER HEART
--------------------------------------------------

Between the couple is a champagne-gold outline heart.

It should remain visually centered.

It should be approximately the same size and stroke weight as the reference.

The heart is an important visual anchor.

When the couple approaches the center, the heart can subtly react:

- slight scale
- slight glow
- gentle opacity change

But keep the animation elegant and restrained.

--------------------------------------------------
COUPLE LABELS
--------------------------------------------------

Below the groom:

"Shuhair"

"The Groom"

Below the bride:

"Hadiya"

"The Bride"

"Shuhair" and "Hadiya" should use an elegant script/calligraphic style.

"The Groom" and "The Bride" should use a refined serif.

--------------------------------------------------
INTERACTIVE TIMELINE
--------------------------------------------------

This is extremely important.

At the lower portion of Page 1 there is a horizontal line connecting the couple.

Initially:

Shuhair -------------------------------- Hadiya

At the center of the line is a circular avatar/portrait indicator.

The line is thin and champagne gold.

There are small labels:

Left:
"Shuhair"

Right:
"Hadiya"

The central circular indicator contains a small portrait/avatar.

This is not merely decorative.

It is part of the interaction.

==================================================
THE MAIN INTERACTION
==================================================

The user should be able to DRAG the couple toward the center.

The interaction should work with:

- Mouse
- Touch
- Pointer events

Do NOT implement this as a simple button click.

The user should physically slide/drag the avatars.

The interaction should feel like the couple is being brought together.

--------------------------------------------------
INITIAL STATE
--------------------------------------------------

Groom starts on the left.

Bride starts on the right.

Both are separated significantly.

The horizontal line spans between them.

The couple should look exactly like the first screenshot.

--------------------------------------------------
DRAGGING
--------------------------------------------------

When the user presses and drags the groom toward the center:

- Groom follows the pointer/finger horizontally.
- Groom should remain constrained to the interaction area.
- Bride can remain in place initially.

When the user drags the bride toward the center:

- Bride follows the pointer/finger horizontally.
- Both avatars should be movable toward each other.

You can support either:

A) independent dragging of both avatars

or

B) dragging the central timeline handles/avatars toward each other.

Choose whichever produces the closest behavior to the reference.

The interaction should feel natural on mobile and desktop.

Use pointer events rather than separate mouse/touch implementations.

--------------------------------------------------
INTERACTION THRESHOLD
--------------------------------------------------

When the couple gets sufficiently close to the center:

approximately 70–80% of the required distance,

trigger the completion sequence.

Do NOT immediately switch pages.

First perform the complete reunion animation.

Example:

1. Couple stops following pointer.
2. Groom smoothly moves toward center.
3. Bride smoothly moves toward center.
4. Their positions converge.
5. Heart gently scales.
6. Background becomes slightly brighter.
7. Couple settles together.
8. Small elegant transition begins.
9. Page 1 fades/slides away.
10. Page 2 appears.

The transition should feel like a romantic reveal.

Do NOT use:

- hard cut
- loading screen
- spinner
- flash
- zoom explosion
- confetti
- flashy particles

Keep it elegant.

--------------------------------------------------
FAILED DRAG
--------------------------------------------------

If the user releases before reaching the threshold:

The avatar should gently return toward its original/resting position.

Use a soft spring/ease animation.

Do not punish the user.

The interaction should feel intuitive.

--------------------------------------------------
VISUAL FEEDBACK
--------------------------------------------------

While dragging:

- Slightly increase avatar scale.
- Add a subtle shadow.
- Cursor changes to grab/grabbing.
- The timeline responds subtly.
- Central portrait can move slightly.
- Heart can respond subtly as distance decreases.

The closer the couple gets, the more visually connected the scene should feel.

Do not over-animate.

==================================================
PAGE 1 → PAGE 2 TRANSITION
==================================================

Once the interaction threshold is reached:

Complete the couple-reunion animation.

Then transition to Page 2.

The transition should look like the invitation is opening/revealing itself.

Use Framer Motion.

Possible transition:

- Page 1 fades
- Couple becomes slightly brighter
- Background softly crossfades
- Page 2 rises/fades into view

The transition should take approximately 700–1200ms.

It should feel premium.

PAGE 2 should NOT simply appear instantly.

==================================================
PAGE 2 — WEDDING INVITATION
==================================================

Page 2 is a separate experience.

Recreate the second supplied screenshot.

This is the wedding invitation details page.

Unlike Page 1, Page 2 is vertically scrollable.

The background remains the same warm ivory invitation-paper texture.

--------------------------------------------------
TOP RIGHT MUSIC PLAYER
--------------------------------------------------

At the top-right of Page 2 is a small floating music control.

Recreate it closely.

It should contain:

"♫ Now Playing"

and a small circular play/pause control.

Use an elegant ivory/gold pill.

Position it fixed near the upper-right.

On mobile, reposition it so it does not overlap important content.

Do not autoplay audio with sound.

Create:

const WEDDING_MUSIC_URL = "/audio/wedding.mp3";

If no audio exists, gracefully disable the control.

==================================================
INVITATION CARD
==================================================

The large central wedding invitation card is the primary visual element of Page 2.

It should be vertically oriented.

It should resemble a premium physical printed wedding invitation.

Card properties:

- warm white / ivory
- subtle border
- subtle shadow
- slightly rounded corners
- ornate champagne-gold Islamic decoration
- floral botanical decoration
- large elegant typography
- generous whitespace

The card should occupy approximately the same width and height proportions as the supplied screenshot.

Do not make it a generic Tailwind card.

--------------------------------------------------
ORNAMENT
--------------------------------------------------

At the top of the invitation card is a large ornate Islamic arabesque decoration.

It should resemble the supplied screenshot.

Use intricate champagne-gold ornamental geometry/floral arabesque.

If necessary, create an SVG asset.

Do not substitute it with a basic CSS border.

--------------------------------------------------
CARD CONTENT
--------------------------------------------------

Use exactly:

بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ

IN THE NAME OF ALLAH THE MOST GRACIOUS AND
THE MOST MERCIFUL

MR. MOIDEEN KUNHI & MRS. SAFIYA MOIDEEN

REQUEST THE HONOUR OF YOUR PRESENCE
AT THE WEDDING RECEPTION OF THEIR
BELOVED SON

Muhammed Shuhair

&

Hadiya Bayan

D/O MR. MUSTHAFA & MRS. SOUDA MUSTHAFA

NIKAH ON

JULY

WEDNESDAY

29

2026

AFTER ASAR

AT THAQWA MASJID, VARAM

RECEPTION AT GROOM'S HOUSE

JULY 30 2026

in sha Allah

Do not alter the names or dates.

--------------------------------------------------
QR CODES
--------------------------------------------------

At the lower portion of the invitation card:

LEFT QR:

MASJID LOCATION

RIGHT QR:

HOUSE LOCATION

Use actual QR codes if possible.

Create configurable constants:

const MASJID_MAP_URL = "...";
const RECEPTION_MAP_URL = "...";

The QR codes should be generated from those URLs.

If the real URLs are not supplied, use clearly isolated placeholder constants so they can be replaced later.

Do not hardcode map URLs throughout the application.

--------------------------------------------------
FLORAL DECORATION
--------------------------------------------------

At the bottom of the invitation card:

Use elegant botanical floral artwork.

Characteristics:

- White/cream flowers
- muted sage leaves
- delicate stems
- soft natural composition
- champagne accents

Match the reference.

The flowers should frame the lower portion of the card rather than becoming a huge decorative block.

==================================================
EVENT LOCATION PANELS
==================================================

Below the invitation card:

Two panels side-by-side on desktop.

LEFT:

Location icon

"Masjid Location"

"Thaqwa Masjid, Varam - Nikah, September 1"

"View on Map"

RIGHT:

Location icon

"Reception House"

"Groom's House - Reception, September 2"

"View on Map"

On mobile:

Stack them vertically.

These should look like refined invitation information blocks, not generic web cards.

--------------------------------------------------
SAVE THE DATE
--------------------------------------------------

Below the location panels is a larger centered panel.

Icon:

Calendar with plus.

Title:

"Save the Date"

Description:

"Add both events to your phone or computer calendar so you don't miss a moment."

Links:

"Add Nikah to Google Calendar"

"Add Reception to Google Calendar"

Button:

"Download for Apple / Outlook (.ics)"

Make the calendar functionality actually work.

Google Calendar links should generate appropriate event URLs.

The .ics button should generate a valid calendar file in the browser.

Do not invent an exact time for "After Asar".

==================================================
CLOSING SECTION
==================================================

At the bottom of Page 2:

"When a servant marries, he has completed half of his faith."

Use elegant gold script.

Add small decorative sparkle elements.

Below:

thin line — gold heart — thin line

Then:

"In sha Allah, we can't wait to celebrate this blessed union with you!"

Then:

"Shuhair & Hadiya"

Finally:

"♡ Start Over"

--------------------------------------------------
START OVER
--------------------------------------------------

"Start Over" is functional.

When clicked:

1. Page 2 fades out.
2. Page 1 returns.
3. Page 1 resets the couple positions.
4. The interaction becomes available again.
5. Scroll position resets to the top.
6. Page 1 appears in its original state.

Do not reload the browser.

Use React state / Framer Motion to transition between the two experiences.

==================================================
RESPONSIVE BEHAVIOR
==================================================

This interaction MUST work on mobile.

Desktop:

- Couple positioned horizontally.
- Large horizontal timeline.
- Drag interaction clearly visible.

Mobile:

- Preserve the same concept.
- Couple should remain visually separated.
- Ensure avatars are large enough to drag.
- Touch dragging must work naturally.
- Do not let the avatars leave the viewport.
- Timeline remains readable.
- The heart remains centered.
- Text remains elegant and readable.

Use pointer events.

Test both:

Desktop mouse dragging.

Mobile touch dragging.

==================================================
PAGE STATE ARCHITECTURE
==================================================

Use an explicit application state such as:

PAGE_1
PAGE_1_INTERACTING
PAGE_1_COMPLETING
PAGE_2

Do not implement Page 2 simply as the next section of Page 1.

Page 2 must be a separate visual state/screen.

Suggested component structure:

App
├── WeddingExperience
│
├── OpeningPage
│   ├── HeroTitle
│   ├── GroomAvatar
│   ├── BrideAvatar
│   ├── Heart
│   ├── CoupleLabels
│   ├── CoupleTimeline
│   └── BackgroundDecorations
│
└── InvitationPage
    ├── MusicPlayer
    ├── InvitationCard
    ├── EventLocations
    ├── SaveTheDate
    └── ClosingSection

==================================================
IMPORTANT VISUAL RESTRICTIONS
==================================================

DO NOT:

- Add a navigation bar.
- Add a countdown.
- Add RSVP.
- Add photo gallery.
- Add guest book.
- Add testimonials.
- Add blog.
- Add social links.
- Add unnecessary sections.
- Add a footer with generic links.
- Turn this into a wedding website template.
- Turn Page 1 into a normal scroll section.
- Turn the drag interaction into a button.
- Use generic UI components.
- Use excessive rounded cards.
- Use glassmorphism.
- Use neon colors.
- Use saturated gold.
- Use excessive animations.

This is a luxury digital invitation.

==================================================
VISUAL MATCHING PROCESS
==================================================

After generating the application, inspect the result against ALL attached screenshots.

Do a visual comparison.

Pay special attention to:

- Page 1 viewport proportions
- Page 1 title position
- Couple position
- Character scale
- Heart position
- Couple labels
- Timeline position
- Center avatar
- Background texture
- Decorative circles
- Gold color
- Typography
- Page 2 invitation card dimensions
- Ornament proportions
- Floral artwork
- QR code placement
- Location panels
- Save-the-date panel
- Closing section
- Overall whitespace

Then refine the implementation.

Do not stop at the first approximation.

==================================================
MOST IMPORTANT REQUIREMENT
==================================================

Understand the interaction correctly:

THE THIRD SCREENSHOT IS NOT A THIRD PAGE.

It shows Page 1 while the user is interacting with it.

The user drags/slides the groom and bride avatars toward the center.

When they meet the required threshold, the reunion animation plays.

THEN the application transitions to Page 2.

The experience should therefore feel like:

"Bring the couple together → reveal the invitation."

This interaction is the defining feature of the website.

Use the attached screenshots as the visual source of truth and reproduce this behavior as accurately as possible.