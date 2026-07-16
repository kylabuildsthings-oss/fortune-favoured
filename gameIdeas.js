(function () {
  "use strict";

  var genres = [
    "2D platformer",
    "puzzle game",
    "top-down shooter",
    "endless runner",
    "tower defense",
    "stealth game",
    "rhythm game",
    "simple shop simulation",
    "arcade breakout-style game",
    "arcade snake-style game",
    "side-scrolling shoot 'em up",
    "match-3 puzzle game",
    "pinball-inspired arcade game",
    "minimalist golf puzzler"
  ];

  var themes = [
    "a haunted bakery",
    "a neon-lit cyberpunk rooftop",
    "a deep-sea research trench",
    "a magical forest clearing",
    "an abandoned space station",
    "a giant's cluttered kitchen",
    "a dusty clockwork museum",
    "a retro arcade basement",
    "a floating sky island",
    "a volcanic hot springs resort",
    "an underground mushroom cavern",
    "a vintage subway tunnel",
    "a rain-soaked rooftop garden",
    "a wizard's messy potion lab"
  ];

  var roles = [
    "a rookie courier",
    "a curious janitor",
    "a runaway automaton",
    "a tiny forest spirit",
    "an overworked barista",
    "a retired stunt pilot",
    "a mischievous raccoon",
    "a lighthouse keeper",
    "a wandering sound engineer",
    "a trainee alchemist",
    "a parkour street artist",
    "a submarine mechanic"
  ];

  var goals = [
    "collect all the scattered ingredients",
    "survive waves of incoming enemies",
    "solve the central mystery",
    "reach the finish line before dawn",
    "restore power to the facility",
    "deliver orders before customers leave",
    "escape before the area collapses",
    "match patterns to unlock each zone",
    "keep your tiny shop running through the evening rush",
    "guide lost spirits to the exit",
    "clear every room without being spotted",
    "hit the rhythm targets in perfect sequence",
    "break every cursed object in the level",
    "herd stray creatures back into their pens"
  ];

  var twists = [
    "your character shrinks over time",
    "you can only move by jumping",
    "you must manage a limited battery charge",
    "the environment rotates every few seconds",
    "enemies copy your last three moves",
    "light and shadow zones swap places periodically",
    "platforms disappear shortly after you step on them",
    "sound cues reveal hidden hazards",
    "gravity reverses whenever you collect an item",
    "you leave behind a trail that attracts enemies",
    "your tools overheat if you use them too quickly",
    "the level rewinds unless you reach checkpoints in order",
    "friendly NPCs become obstacles after sundown",
    "every action costs one unit of a shared resource pool"
  ];

  var timeBands = [
    "2-4 hours",
    "4-6 hours",
    "6-8 hours",
    "1-2 days",
    "2-3 days"
  ];

  var templates = [
    function (parts) {
      return (
        "Make a " +
        parts.genre +
        " set in " +
        parts.theme +
        " where you must " +
        parts.goal +
        ", but " +
        parts.twist +
        "."
      );
    },
    function (parts) {
      return (
        "Make a " +
        parts.genre +
        " where you play in " +
        parts.theme +
        " and must " +
        parts.goal +
        " while " +
        parts.twist +
        "."
      );
    },
    function (parts) {
      return (
        "Make a " +
        parts.genre +
        " where you play as " +
        parts.role +
        " in " +
        parts.theme +
        " who must " +
        parts.goal +
        " while " +
        parts.twist +
        "."
      );
    },
    function (parts) {
      return (
        "Make a " +
        parts.genre +
        " where you play as " +
        parts.role +
        " who must " +
        parts.goal +
        ", and " +
        parts.twist +
        "."
      );
    },
    function (parts) {
      var goal = parts.goal.charAt(0).toUpperCase() + parts.goal.slice(1);
      return (
        "Make a " +
        parts.genre +
        " in " +
        parts.theme +
        ": " +
        goal +
        ", but " +
        parts.twist +
        "."
      );
    }
  ];

  var lastIdea = null;

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function pickTimeBand(genre) {
    var complexGenres = {
      "tower defense": true,
      "simple shop simulation": true,
      "stealth game": true,
      "rhythm game": true,
      "side-scrolling shoot 'em up": true
    };

    var simpleGenres = {
      "endless runner": true,
      "arcade snake-style game": true,
      "arcade breakout-style game": true,
      "match-3 puzzle game": true
    };

    if (simpleGenres[genre]) {
      return pickRandom(["2-4 hours", "4-6 hours", "4-6 hours"]);
    }

    if (complexGenres[genre]) {
      return pickRandom(["6-8 hours", "1-2 days", "2-3 days"]);
    }

    return pickRandom(timeBands);
  }

  function buildIdea() {
    var genre = pickRandom(genres);
    var parts = {
      genre: genre,
      theme: pickRandom(themes),
      role: pickRandom(roles),
      goal: pickRandom(goals),
      twist: pickRandom(twists)
    };
    var idea = pickRandom(templates)(parts);

    return {
      idea: idea,
      estimatedTime: "Estimated Time: " + pickTimeBand(genre)
    };
  }

  function generateGameIdea() {
    var result = buildIdea();
    var attempts = 0;

    while (result.idea === lastIdea && attempts < 12) {
      result = buildIdea();
      attempts += 1;
    }

    lastIdea = result.idea;
    return result;
  }

  window.generateGameIdea = generateGameIdea;
})();
