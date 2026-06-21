// ============================================================
// config.js — Customize your wedding game here!
// ============================================================

const CONFIG = {

  // ---- Character Names -----------------------------------------------
  // player1 throws the laundry (top of screen)
  // player2 catches the laundry (bottom of screen, controlled by you)
  player1Name: 'Sara',
  player2Name: 'Gideon',

  // ---- Colors (wedding palette) --------------------------------------
  // Change any hex value to restyle the game.
  colors: {
    sage:          '#374e2e',
    rose:          '#d8b9a4',
    darkGreen:     '#384839',
    offWhite:      '#f9f9f9',
    gold:          '#d4a017',
    ironGray:      '#7a7a7a',
    floor:         '#a0764a',
    floorDark:     '#8b6239',
    bg:            '#e8e0d6',
    wall:          '#f2ece6',
    skin:          '#f5c8a8',
    gideonHair:    '#e8c840',
    gideonHairDark:'#c8a830',
    saraHair:      '#1a1a1a',
    blueGreen:     '#3a9988',
    brownEye:      '#5a3018',
    white:         '#ffffff',
    black:         '#000000',
    red:           '#cc3333',
    darkRose:      '#b8907a',
  },

  // ---- Photo Files ---------------------------------------------------
  // Each list is tried in order; the first file that loads is used.
  // Add your own filenames at the front of each list.
  photos: {
    player2:    ['gideon.png', 'Gidde.jpeg'],
    player1Down: ['sara_down.png', 'Sara_hands_down.jpg'],
    player1Up:   ['Sara_hands_up_crop_nobg.png', 'Sara_hands_up_crop.jpg', 'Sara_hands_up.jpg', 'sara_up.png'],
  },

  // ---- Scoring & Gameplay --------------------------------------------
  scoring: {
    regularPoints:      10,   // points for each normal clothing item
    weddingDressPoints: 50,   // points for catching the wedding dress
    ringsPoints:        20,   // points for catching the rings
    ringsMultiplier:    2,    // score multiplier granted by rings
    ringsDuration:      5,    // seconds the rings multiplier lasts
    ironStunDuration:   1.5,  // seconds player2 is stunned by the iron
  },

  // Maximum missed items before game over
  messMax: 15,

  // ---- UI Text -------------------------------------------------------
  // Use {player1} and {player2} as placeholders for the character names.
  text: {
    gameTitle:        'Bröllopsspelet',
    subtitle:         'En helt vanlig dag hos {player1} & {player2}.',
    legendHeader:     'Fånga {player1}s kläder:',
    regularClothes:   'Vanliga kläder = +10 poäng',
    regularLabel:     'Vanliga kläder (+10)',

    // Title screen
    playPrompt:       'Tryck för att spela',
    bestScore:        'Bästa poäng: ',
    instructLine1:    'Flytta musen/fingret och fånga kläder',
    instructLine2:    'Undvik att tappa för många plagg',

    // HUD
    hudScore:         'Poäng: ',
    hudBest:          'Bäst: ',
    hudMess:          'Stök',

    // Game over screen
    gameOver:         'Game Over!',
    gameOverSub:      'Det blev för stökigt...',
    yourScore:        'Ditt resultat',
    newRecord:        '⭐ Nytt rekord! ⭐',
    prevRecord:       'Tidigare: ',
    btnPlayAgain:     '▶ Spela igen',
    btnMainMenu:      '⌂ Meny',

    // Special item descriptions (shown in legend and on wall)
    weddingDressText: 'Brudklänning: +50 poäng',
    ringsText:        'Ringar: x2 poäng i 5 sek',
    ironText:         'Strykjärn: {player2} stunnad',

    // Pop-up messages during gameplay
    popupFirstMiss:    'Hallå, plocka upp det!',
    popupIronStun:     'Akta strykjärnet!',
    popupWeddingDress: 'Du räddade brudklänningen!',
    popupHighMess:     'Det börjar bli stökigt...',

    // Combo pop-ups — one is picked at random each time.
    // Add or remove phrases freely; use {player1}/{player2} if you like.
    popupCombo5Pool: [
      'Bra städat!',
      'Snyggt jobbat, {player2}!',
      'Fem i rad! 🎯',
      'Imponerande reflexer!',
    ],
    popupCombo10Pool: [
      'Du är en tvättmaskin!',
      'COMBO x10! Fantastiskt!',
      '{player2} fångar allt!',
      'Tio i rad - sjukt!',
      'Tvättstjärna av rang!',
    ],
  },
};
