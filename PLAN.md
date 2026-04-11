# Gideons Tvättnightmare — Game Plan

A 16-bit pixel art catcher game where Sara throws clothes from the top of the screen and Gideon catches them with a laundry basket. Single HTML file, embeddable in Google Sites via iframe. Endless survival mode with fast chaos escalation.

## Design Decisions

| Choice | Decision |
|---|---|
| Art style | 16-bit pixel art (SNES-era detail) |
| Colors | Wedding palette: `#374e2e` (sage), `#d8b9a4` (dusty rose), `#384839` (dark green), `#f9f9f9` (off-white) |
| Controls | Mouse-follow on desktop, finger-follow on mobile |
| Game length | Endless / survival (play until mess meter fills) |
| Difficulty | Fast chaos — ramps up quickly |
| Clothing items | Socks, dresses/skirts, shoes/heels, scarves, t-shirts, towels, hats |
| Special items | Wedding dress (big bonus), wedding rings (score multiplier), iron (stuns Gideon) |
| Lives/health | Mess meter — clothes pile up on floor visually, game over when full |
| Comedy pop-ups | Subtle, a few |
| Sound | Sound effects + background music |
| Scoring | Local high score (localStorage) |
| End screen | Score + play again button |
| Language | Swedish |
| Sara behavior | Moves around at top of screen, throwing from different positions |
| Background | Living room scene |
| Catching tool | Laundry basket |
| Mess meter visual | Literal clothes pile up on floor |

---

## Implementation Phases

### Phase 1: Core Engine & Canvas Setup
- [ ] Create `index.html` with HTML5 Canvas, responsive sizing (fits iframe), meta viewport for mobile
- [ ] Implement game loop (`requestAnimationFrame`) with delta-time for consistent speed
- [ ] Implement input handling: mouse position tracking on desktop, touch position tracking on mobile — Gideon's basket follows the pointer X position smoothly
- [ ] Set up game state machine: `TITLE → PLAYING → GAME_OVER`

### Phase 2: Characters & Movement
- [ ] Draw pixel-style sprites for Sara and Gideon using canvas drawing
- [ ] Implement Gideon at bottom — basket follows mouse/finger X with slight smoothing (lerp)
- [ ] Implement Sara at top — she moves left/right randomly, pauses at positions, plays throw animation, then moves again
- [ ] Sara's throw logic: at random intervals she throws a clothing item from her current X position

### Phase 3: Falling Items
- [ ] Define item types with properties:
  - **Regular clothes** (socks, dress, shoes, scarf, t-shirt, towel, hat): +10 pts each, normal fall speed, different widths
  - **Wedding dress**: +50 pts, slightly larger, glows/sparkles
  - **Wedding rings**: activates 2x score multiplier for 5 seconds, small size
  - **Iron**: stuns Gideon for 1.5 seconds (can't move), slightly larger, distinct look
- [ ] Items spawn from Sara's position with slight random horizontal velocity (arc trajectory) and fall with gravity
- [ ] Collision detection: basket hitbox vs item hitbox (rectangular AABB)
- [ ] Caught items: remove item, add score, play catch sound, brief visual feedback
- [ ] Missed items: item lands on floor, stays there visually (mess meter), play drop sound

### Phase 4: Mess Meter & Game Over
- [ ] Track missed items count — floor visually fills with landed clothes (they stay where they fell as small sprites)
- [ ] Mess meter threshold: ~15 items on floor = game over (tunable)
- [ ] Show a subtle mess bar in corner that fills as floor gets messier
- [ ] Game over trigger: freeze gameplay, show game over overlay

### Phase 5: Difficulty Escalation (Fast Chaos)
- [ ] Difficulty parameters increase over time (every 5–10 seconds):
  - Throw frequency: starts at ~1 item/sec → ramps to 3–4 items/sec
  - Fall speed: gradual increase (1.0x → 2.0x over ~60 seconds)
  - Sara movement speed: gets faster
  - Multiple items thrown at once (after ~30 seconds, can throw 2 at a time)
- [ ] Special items start appearing after 15 seconds, increasing in frequency

### Phase 6: Comedy Pop-ups (Swedish)
- [ ] Trigger system — on specific events, show a brief text bubble (1.5 sec):
  - First miss → *"Hallå, plocka upp det!"* (Hey, pick that up!)
  - 5 catches in a row → *"Bra jobbat, Gideon!"* (Good job, Gideon!)
  - Iron stun → *"Aj! Vem lämnade strykjärnet?!"* (Ouch! Who left the iron?!)
  - Wedding dress caught → *"Rör inte brudklänningen!"* (Don't touch the wedding dress!)
  - High mess → *"Det börjar bli stökigt..."* (It's getting messy...)

### Phase 7: UI Screens
- [ ] **Title screen**: "Gideons Tvättnightmare", pixel art of Sara and Gideon, *"Tryck för att spela"* (Tap to play), mute button
- [ ] **HUD during gameplay**: Score (top-left), high score (top-right), multiplier indicator when active, subtle mess bar
- [ ] **Game over screen**: Final score, high score (if beaten → *"Nytt rekord!"*), *"Spela igen"* (Play again) button
- [ ] Save/load high score from localStorage

### Phase 8: Pixel Art & Visuals
- [ ] Create 16-bit style sprites using the wedding color palette:
  - **Sara**: pixel character with dusty rose (`#d8b9a4`) outfit, animated throwing motion
  - **Gideon**: pixel character with sage/dark green (`#374e2e` / `#384839`) outfit, holding laundry basket, running + stunned states
  - **Clothing items**: small pixel sprites for each type, distinct silhouettes
  - **Special items**: wedding dress (white with sparkle), rings (gold shimmer), iron (gray, menacing)
  - **Living room background**: pixel art room with couch, lamp, window — walls `#f9f9f9`, accents in greens/rose
- [ ] All sprites drawn procedurally on canvas or stored as inline base64 PNGs
- [ ] Particle effects: sparkles on wedding dress, flash on catch, dust on floor items

### Phase 9: Audio
- [ ] Sound effects (short, procedurally generated or free CC0):
  - Catch: satisfying "pop" / "whoosh"
  - Drop/miss: soft "thud"
  - Wedding dress bonus: chime/sparkle
  - Rings multiplier: ascending notes
  - Iron stun: comical "bonk"
  - Game over: sad trombone / comical fail
- [ ] Background music: upbeat chiptune loop
- [ ] Mute toggle button (persist preference in localStorage)
- [ ] Audio must respect browser autoplay policies — start on first user interaction

### Phase 10: Polish & Mobile Optimization
- [ ] Responsive canvas scaling — fit container width, maintain aspect ratio
- [ ] Touch event handling (`touchstart`, `touchmove`, `touchend`) alongside mouse events
- [ ] Prevent default touch behaviors (scrolling, zooming) on the canvas
- [ ] Performance: object pooling for items, limit floor items rendering
- [ ] CSS: remove browser default margins/padding, full-bleed canvas

### Phase 11: Google Sites Integration
- [ ] Host game on GitHub Pages (from this repo) or similar static host
- [ ] In Google Sites: **Insert → Embed → By URL** → paste the hosted URL
- [ ] Alternative: **Insert → Embed → Embed code** → paste iframe tag
- [ ] Recommended iframe size: 400×600 or responsive
- [ ] Test iframe embedding constraints (localStorage works, no popups needed)

---

## File Structure

```
wedding_game/
├── index.html          # Complete game (HTML + CSS + JS + inline assets)
└── PLAN.md             # This file
```

Everything is in a single `index.html` — no external dependencies, no build step.

---

## Verification Checklist

1. [ ] Open `index.html` in browser — title screen loads
2. [ ] Tap to play — Gideon follows pointer, Sara throws items
3. [ ] Catch items → score increases, catch sound plays
4. [ ] Miss items → clothes appear on floor, mess accumulates
5. [ ] Special items work: wedding dress (bonus), rings (multiplier), iron (stun)
6. [ ] ~15 misses → game over screen with score
7. [ ] Swedish text on pop-ups and UI
8. [ ] High score persists across page reloads (localStorage)
9. [ ] Works on mobile (touch controls, no scroll interference)
10. [ ] Works in iframe: `<iframe src="index.html" width="400" height="600"></iframe>`
11. [ ] Audio plays after first interaction, mute works
12. [ ] No frame drops with many items on screen

---

## Scope

**Included:** Complete playable game, procedural pixel art, sound effects, Swedish UI, local high score, Google Sites embed support.

**Excluded:** Online leaderboard, multiplayer, hand-drawn custom art, analytics, backend.
