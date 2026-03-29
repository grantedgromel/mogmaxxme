# MogMaxxMe.com — Redesign Brief

## What This Is
MogMaxxMe is a meme-culture fitness app that uses AI to score and roast your physique. Users upload a photo, get assigned a tier (S through F), and receive a brutally honest critique written in gym bro voice. The tone is BroScienceLife meets tier-list meme culture — irreverent, self-aware, funny, but with real fitness advice underneath the roasting.

## Current State
The live site (mogmaxxme.com) is a single dark-mode landing page with a comparison card and CTA. It's generic SaaS template energy. None of the archetype content, tier system, or meme personality comes through.

## The Redesign Goal
Rebuild the frontend to be **crispier, more visually striking, and fully leaning into the meme/gym-bro culture**. This should feel like a product built BY the internet FOR the internet — not a startup landing page with a fitness skin.

## Design Direction: Retro Arcade × Tier List Meme Culture
- **Retro arcade aesthetic**: Pixel art characters, scan lines, CRT glow effects, 8-bit inspired UI elements, arcade cabinet framing
- **Tier list energy**: The S-through-F ranking system is core to the identity. The tier list visual format (colored rows, character portraits, rank labels) should be prominent
- **Gym bro meme voice**: Every piece of copy should sound like it was written by someone who lives on Reddit fitness forums and speaks fluent internet
- **Dark theme dominant**: Deep darks (#002b36 / #073642 base), with hot pink (#d33682) and teal (#2aa198) as primary accents, orange (#cb4b16) for warnings/emphasis
- **Typography**: Space Mono for headings/UI chrome (arcade feel), Outfit for body text (clean readability)

## Key Content Assets

### Archetype Tier System (in `assets/archetype-images/`)
12 pixel-art character archetypes across 6 tiers. Each has an image and a roast description.

| Tier | Archetype | Image File |
|------|-----------|------------|
| S | Gigachad | S-Tier Gigachad.png |
| A | Athletic Bro | A-Tier Athletic Bro.png |
| A | Chad | A-Tier Chad.png |
| B | Bulk Bro | B-Tier Bulk Bro.png |
| B | Semi-Athletic Bro | B-Tier Semi-Athletic Bro.png |
| B | Wannabe Chad | B-Tier Wannabe Chad.png |
| C | Chubby Bro | C-Tier Chubby Bro.png |
| C | NPC Normie | C-Tier NPC Normie.png |
| D | Dad Bod Boomer | D-Tier Dad Bod Boomer.png |
| D | Discord Mod Bro | D-Tier Discord Mod Bro.png |
| D | Extra Chubby Bro | D-Tier Extra Chubby Bro.png |
| F | Morbidly Obese Bro | F-Tier Morbidly Obese Bro.png |

Full archetype descriptions are in `Archetype Descriptions.txt`.

### Theme Variables
CSS custom properties for the retro arcade palette are in `Retro Arcade Theme.txt` — includes light/dark mode tokens and Tailwind-compatible mappings.

## Page Structure (Redesign)

### 1. Hero Section
- Animated title with arcade/glitch effect
- Tagline: "The AI that tells you what your gym bros won't."
- Gigachad mascot prominently featured
- CTA button with glow/pulse effect
- Scanline or CRT overlay for retro atmosphere

### 2. Tier List Showcase
- Full visual tier list displaying all 12 archetypes in their ranked rows (S/A/B/C/D/F)
- Each archetype shows pixel art portrait + name
- Hovering/clicking reveals the roast description
- Tier row colors should follow fighting-game/tier-list conventions (gold for S, green for A, blue for B, yellow for C, orange for D, red for F)
- This section sells the personality of the product

### 3. How It Works
- 3-step flow: Upload Photo → AI Analyzes → Get Your Tier + Critique
- Use pixel art or arcade-style icons for each step
- Keep it punchy — no walls of text

### 4. Social Proof / Comparison
- Rework the existing comparison card (Reddit/coach/gym buddy vs Mogmaxxing)
- Make it feel like a versus screen or character select screen from a fighting game

### 5. CTA / Footer
- Final CTA with urgency/humor ("Stop dodging the mirror, bro")
- Minimal footer

## Technical Notes
- Use Next.js (App Router) with Tailwind CSS
- The theme CSS variables in `Retro Arcade Theme.txt` should be integrated into `globals.css`
- Prioritize mobile responsiveness — most users will access from their phone camera
- Animations should be performant (CSS transitions/transforms preferred, JS animation only where necessary)
- Images are in PNG format and should be optimized for web

## What NOT To Do
- No generic SaaS template energy
- No purple-gradient-on-white cliches
- No Inter/Roboto/system fonts
- No cookie-cutter component library look
- Don't sanitize the humor — the roast descriptions are the product's voice
- Don't bury the tier list — it's the hook that makes people share the site

## Reference Vibe
BroScienceLife (YouTube) — the comedy is exaggerated gym culture played completely straight. The humor comes from commitment to the bit, not winking at the audience.
