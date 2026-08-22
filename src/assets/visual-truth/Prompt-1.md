Build a complete, production-quality wedding invitation website that recreates the attached reference screenshots as closely and accurately as possible.

IMPORTANT:
The attached screenshots are the PRIMARY VISUAL SOURCE OF TRUTH. Do not redesign the website, reinterpret the style, simplify the layout, or replace elements with generic wedding website components. Study the screenshots carefully and reproduce their visual hierarchy, proportions, typography, spacing, colors, animations, composition, and responsive behavior.

The website is for:

Shuhair & Hadiya

Wedding dates:
September 1–2, 2026

The overall design should feel like an elegant luxury Islamic wedding invitation: warm ivory paper, muted champagne gold, delicate botanical decoration, refined serif typography, subtle texture, soft shadows, and extremely restrained animation.

TECHNICAL REQUIREMENTS

- Use React.
- Use Vite.
- Use JavaScript, NOT TypeScript.
- Use Tailwind CSS where useful, combined with modern CSS for highly precise styling.
- Use React components with clean reusable structure.
- Use Lucide React icons where icons are needed.
- Use Framer Motion for subtle entrance and scroll animations.
- Do not use TypeScript.
- Do not create unnecessary backend functionality.
- The website should work entirely as a polished frontend experience.
- Keep the code clean, modular, and production-ready.
- Make the website fully responsive.
- Desktop and mobile layouts must both feel intentionally designed.
- Do not simply scale the desktop design down for mobile.
- Avoid excessive rounded cards, excessive gradients, glassmorphism, excessive shadows, or modern SaaS-style UI.
- Do not use generic template styling.
- Do not use Bootstrap.
- Do not use random stock imagery.
- Do not use emoji as decorative icons.

VISUAL DIRECTION

Reproduce the exact visual language visible in the screenshots.

Primary palette:

- Background: warm ivory / cream
- Main gold: muted champagne / antique gold
- Secondary gold: slightly darker warm gold
- Text: warm dark brown / taupe
- White: soft warm white rather than pure white
- Botanical elements: muted sage green with cream/white flowers

The page background should look like premium textured invitation paper.

Create a very subtle fine-grain paper texture across the background using CSS or an appropriate generated texture asset. The texture must be extremely subtle and should never interfere with readability.

The overall page should feel:

- Elegant
- Romantic
- Minimal
- Islamic wedding inspired
- Luxury invitation
- Editorial
- Soft
- Warm
- Timeless

Do NOT make it look like a typical modern wedding SaaS template.

TYPOGRAPHY

Typography is extremely important.

The large names "Shuhair & Hadiya" use a sophisticated high-contrast luxury display serif similar to Didot/Bodoni/Cormorant-style wedding typography.

Use an appropriate freely available web font if necessary, but choose one that visually matches the reference as closely as possible.

Use different typography roles:

1. Luxury display serif for:
   - Shuhair & Hadiya
   - Muhammad Shuhair
   - Hadiya Bayan
   - section titles

2. Elegant script/calligraphic font for:
   - Shuhair
   - Hadiya
   - small decorative phrases
   - the closing signature-style text

3. Refined serif for:
   - body copy
   - event information
   - descriptions

4. Small uppercase typography for:
   - labels
   - invitation details
   - supporting information

Typography should have generous letter spacing where appropriate.

Do not substitute everything with one font.

PAGE STRUCTURE

Create the website as a single long-scrolling wedding invitation.

The visual flow should closely match the screenshots:

1. HERO / OPENING SECTION
2. WEDDING INVITATION CARD
3. EVENT LOCATIONS
4. SAVE THE DATE
5. CLOSING / WEDDING QUOTE
6. FINAL SIGNATURE
7. START OVER CONTROL

--------------------------------------------------
1. HERO SECTION
--------------------------------------------------

The first viewport should closely recreate the first screenshot.

Background:
Warm ivory textured paper.

At the top center:

"Shuhair & Hadiya"

Use a large elegant luxury serif display font.

Below it:

"Are getting married!"

Below that:

"✧ September 1 - 2, 2026 ✧"

Use subtle gold decorative sparkle symbols or elegant line decorations.

MAIN HERO COMPOSITION

Position the groom on the left side and the bride on the right side.

Groom:
- Elegant illustrated/cartoon male wedding character
- Black tuxedo
- White shirt
- Black bow tie
- Dark hair
- Beard
- Standing full-body
- Match the visual proportions and placement from the screenshot

Bride:
- Elegant illustrated/cartoon Muslim bride
- White hijab
- White wedding dress
- Holding a bouquet
- Standing full-body
- Match the visual proportions and placement from the screenshot

If exact character assets cannot be extracted from the screenshots, create visually matching original illustrated assets. They should resemble the style and proportions of the reference without looking like generic clip-art.

Between the groom and bride:

A delicate champagne-gold heart outline.

Below each character:

Left:

"Shuhair"
"The Groom"

Right:

"Hadiya"
"The Bride"

Use the same typography hierarchy as the screenshot.

BACKGROUND DECORATION

Add several very subtle translucent champagne/cream circular decorative bubbles/blobs floating around the hero.

They should be extremely soft and low-opacity.

They should not look like normal bubbles.

They should resemble faint embossed/painted circles on luxury invitation paper.

HERO ANIMATION

On initial page load:

- Background appears softly.
- Title fades in.
- Subtitle fades in.
- Date fades in.
- Groom and bride gently fade/slide into position.
- Heart appears subtly.
- Decorative circles drift almost imperceptibly.

Animation must be elegant and slow.

No aggressive animation.

No bounce effects.

No flashy transitions.

TIMELINE / CENTER INDICATOR

At the bottom of the hero, reproduce the horizontal timeline shown in the reference.

There should be:

Shuhair ----------- center indicator ----------- Hadiya

The center contains a circular image/portrait indicator.

The line is thin and champagne gold.

The labels are delicate script-style text.

This element should visually connect the groom and bride.

--------------------------------------------------
2. INVITATION CARD SECTION
--------------------------------------------------

Below the hero, recreate the large vertical wedding invitation card shown in the screenshots.

The card should be centered and relatively narrow compared with the page width.

It should resemble a physical luxury printed invitation.

Card:

- Warm white / ivory background
- Thin subtle border
- Soft shadow
- Slightly rounded corners
- Gold ornamental Islamic pattern at the top
- Gold decorative floral/botanical artwork at the bottom
- Large elegant typography
- Generous whitespace

The top ornament should be an intricate Islamic geometric/floral arabesque pattern in champagne gold.

Do NOT replace this with a generic CSS border.

If necessary, generate/create a decorative SVG or image asset that closely resembles the ornate pattern in the screenshot.

CARD CONTENT

At the top:

Arabic Bismillah:

"بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ"

Below it:

"IN THE NAME OF ALLAH THE MOST GRACIOUS AND
THE MOST MERCIFUL"

Then:

"MR. MOIDEEN KUNHI & MRS. SAFIYA MOIDEEN"

Then:

"REQUEST THE HONOUR OF YOUR PRESENCE
AT THE WEDDING RECEPTION OF THEIR
BELOVED SON"

Main names:

"Muhammed Shuhair"

"&"

"Hadiya Bayan"

Then:

"D/O MR. MUSTHAFA & MRS. SOUDA MUSTHAFA"

Then:

"NIKAH ON"

"JULY"

"WEDNESDAY"

"29"

"2026"

"AFTER ASAR"

"AT THAQWA MASJID, VARAM"

Then:

"RECEPTION AT GROOM'S HOUSE"

"JULY 30 2026"

At the bottom of the invitation card:

Two QR code areas.

Left:
"MASJID LOCATION"

Right:
"HOUSE LOCATION"

Use realistic generated QR-code-looking visuals or actual QR codes linked to configurable map URLs.

Do not make the QR codes decorative only. Structure the implementation so the URLs can easily be replaced with the actual Google Maps links later.

Under the invitation:

"in sha Allah"

Then floral artwork across the bottom.

IMPORTANT:
The invitation card must visually dominate the section just like the reference screenshot.

--------------------------------------------------
3. EVENT LOCATION SECTION
--------------------------------------------------

Directly beneath the invitation card, create two side-by-side event location panels.

LEFT:

Icon: location pin inside a soft circular ivory/gold background.

Title:

"Masjid Location"

Description:

"Thaqwa Masjid, Varam - Nikah, September 1"

Button:

"View on Map"

RIGHT:

Icon: location pin.

Title:

"Reception House"

Description:

"Groom's House - Reception, September 2"

Button:

"View on Map"

VISUAL STYLE

These should NOT look like generic web cards.

They should look like elegant invitation information panels.

Use:

- Soft ivory background
- Thin subtle border
- Very restrained radius
- Minimal shadow
- Champagne gold accents
- Generous whitespace

Buttons should be understated.

The gold button in the reference should be reproduced accurately.

The map buttons should open configurable Google Maps URLs in a new tab.

Create constants for:

MASJID_MAP_URL
RECEPTION_MAP_URL

so the real URLs can easily be inserted later.

--------------------------------------------------
4. SAVE THE DATE SECTION
--------------------------------------------------

Below the location panels, create a larger centered section matching the screenshot.

Use a calendar icon inside a subtle circular background.

Title:

"Save the Date"

Description:

"Add both events to your phone or computer calendar so you don't
miss a moment."

Provide:

"Add Nikah to Google Calendar"

"Add Reception to Google Calendar"

Also provide:

"Download for Apple / Outlook (.ics)"

FUNCTIONALITY

The Google Calendar links should generate/open correctly formatted Google Calendar event URLs.

The .ics download button should generate a valid calendar file in the browser.

Nikah:

Date:
September 1, 2026

Time:
After Asar

Location:
Thaqwa Masjid, Varam

Reception:

Date:
September 2, 2026

Location:
Groom's House

Where exact times are unavailable, do not invent specific times.

--------------------------------------------------
5. CLOSING QUOTE
--------------------------------------------------

After the Save the Date section, create a large amount of breathing room.

Centered gold script text:

"When a servant marries, he has completed half of his faith."

Decorate the quote subtly with tiny gold sparkle/star ornaments on both sides.

Below:

A thin horizontal line
gold heart
thin horizontal line

Then:

"In sha Allah, we can't wait to celebrate this blessed union with you!"

Then:

"Shuhair & Hadiya"

Use an elegant script/display font.

At the very bottom:

"♡ Start Over"

This should be a functional button.

Clicking "Start Over" should smoothly scroll back to the top of the page.

--------------------------------------------------
6. MUSIC PLAYER
--------------------------------------------------

The screenshot contains a small music control at the upper-right area.

Recreate it.

It should be a tiny elegant floating music player.

Default state:

"♫ Now Playing"

with a small circular play/pause button.

Use a subtle ivory/gold pill design.

The music player must:

- Stay fixed near the top-right
- Be unobtrusive
- Work on desktop and mobile
- Have play/pause functionality
- Display an appropriate music icon
- Use a configurable audio file path

Create:

const WEDDING_MUSIC_URL = "/audio/wedding.mp3";

If the audio file does not exist, gracefully disable the player instead of throwing an error.

Do not autoplay audio with sound without user interaction.

--------------------------------------------------
7. PAGE BACKGROUND
--------------------------------------------------

The background is one of the most important parts of the design.

Use a warm ivory base.

Add:

- Extremely subtle paper grain
- Very faint circular decorative elements
- Occasional soft champagne shapes
- Very subtle texture variation

The entire page should feel like an expensive physical wedding invitation.

Avoid:

- Pure white #ffffff background everywhere
- Strong beige
- Heavy gradients
- Strong shadows
- Dark backgrounds
- Bright saturated gold

Use soft champagne gold.

Suggested starting palette:

--ivory: #F8F3E8
--paper: #FBF8F1
--gold: #C9A35A
--gold-light: #E5D1A4
--gold-dark: #A77D35
--brown: #6F6253
--sage: #87937E

These are starting values only. Adjust them after comparing against the reference screenshots.

--------------------------------------------------
8. RESPONSIVE DESIGN
--------------------------------------------------

Desktop must closely match the supplied desktop screenshots.

On mobile:

- Preserve the same visual hierarchy.
- Groom and bride should remain prominent.
- Stack or reposition the characters intelligently.
- Keep the heart centered.
- Keep the timeline readable.
- Invitation card should fit the viewport with appropriate margins.
- Location panels should stack vertically.
- Save-the-date section remains centered.
- Music player must not overlap important content.
- Typography must scale smoothly.
- Do not simply shrink everything until it becomes unreadable.

The design should feel like the same website on mobile, not a separate mobile template.

--------------------------------------------------
9. ANIMATION SYSTEM
--------------------------------------------------

Use Framer Motion sparingly.

Desired effects:

- Hero fade-in
- Character fade/slide
- Gentle title reveal
- Subtle scroll reveal for invitation card
- Subtle reveal for location sections
- Gentle reveal for save-the-date
- Final quote fade-in
- Smooth scrolling
- Very subtle floating background elements

Animation timing should generally be slow and luxurious.

Use ease-out/ease-in-out curves.

Avoid:

- Bounce
- Elastic effects
- Fast zoom
- Excessive parallax
- Large rotations
- Confetti
- Particle explosions
- Excessive motion

This is a luxury invitation, not a flashy landing page.

--------------------------------------------------
10. VISUAL ACCURACY REQUIREMENT
--------------------------------------------------

After implementing the first version, compare the live preview against the attached screenshots.

Perform a visual refinement pass.

Pay particular attention to:

1. Exact overall proportions
2. Hero vertical spacing
3. Title size
4. Font style
5. Gold color
6. Character placement
7. Heart size and position
8. Timeline position
9. Invitation card width
10. Invitation card height
11. Ornamental top pattern
12. Floral artwork
13. Location panel dimensions
14. Save-the-date panel dimensions
15. Section spacing
16. Background texture
17. Border thickness
18. Shadow softness
19. Mobile responsiveness
20. Overall whitespace

Do not stop after generating the first approximation.

Iterate on the CSS until the result visually resembles the reference screenshots as closely as possible.

--------------------------------------------------
11. ASSET STRATEGY
--------------------------------------------------

Do not use random internet images.

Create or reproduce the necessary visual assets locally.

Required assets include:

- Groom illustration
- Bride illustration
- Islamic ornamental header
- Floral invitation decoration
- QR codes
- Subtle paper texture
- Any tiny decorative elements

Prefer SVG or optimized WebP/PNG where appropriate.

If image generation is available in the environment, use it to create the illustrated wedding characters and ornamental artwork.

The characters must match the reference composition:

Groom:
black tuxedo, beard, dark hair, standing pose.

Bride:
white hijab, white wedding dress, bouquet, standing pose.

Do not use photorealistic people.

Use elegant polished digital illustration matching the supplied screenshot.

--------------------------------------------------
12. COMPONENT ARCHITECTURE
--------------------------------------------------

Create clean components such as:

App
WeddingPage
HeroSection
CoupleIllustration
WeddingTimeline
InvitationCard
EventLocations
LocationCard
SaveTheDate
CalendarActions
ClosingSection
MusicPlayer
BackgroundDecorations

Keep event information in structured constants rather than hardcoding it throughout components.

For example:

const weddingDetails = {
  groom: "Shuhair",
  bride: "Hadiya",
  nikahDate: "September 1, 2026",
  receptionDate: "September 2, 2026",
  nikahVenue: "Thaqwa Masjid, Varam",
  receptionVenue: "Groom's House"
};

--------------------------------------------------
13. ACCESSIBILITY AND QUALITY
--------------------------------------------------

Use:

- Semantic HTML
- Proper heading hierarchy
- Alt text for meaningful images
- Keyboard-accessible buttons
- Visible focus states
- Good contrast
- Responsive typography

Do not sacrifice the visual design for unnecessary UI elements.

--------------------------------------------------
14. IMPORTANT CONTENT RULES
--------------------------------------------------

Do not change the names.

Use:

Shuhair & Hadiya

Muhammed Shuhair

Hadiya Bayan

Do not change the dates.

Nikah:
September 1, 2026

Reception:
September 2, 2026

Do not invent additional wedding events.

Do not add:

- RSVP forms
- Guest books
- Countdown timers
- Photo galleries
- Social media sections
- Contact forms
- Testimonials
- Blog sections
- Generic wedding website sections

unless they are visible in the reference screenshots.

The goal is an accurate recreation of the supplied website, not an expanded wedding website template.

--------------------------------------------------
15. FINAL QUALITY BAR
--------------------------------------------------

The finished result should look like a professionally designed luxury wedding invitation website made by a high-end wedding designer.

It should NOT look AI-generated.

It should NOT look like a generic Tailwind template.

It should NOT look like a SaaS landing page.

It should NOT contain placeholder lorem ipsum.

It should NOT contain unfinished sections.

It should NOT contain "TODO" text in the visible UI.

It should feel intentional, polished, delicate, romantic, and premium.

Most importantly:

USE THE ATTACHED SCREENSHOTS AS THE VISUAL SOURCE OF TRUTH.

When there is a conflict between your default design assumptions and what appears in the screenshots, ALWAYS follow the screenshots.

Build the complete website now, then inspect your own implementation and refine the visual details until it closely matches the reference.