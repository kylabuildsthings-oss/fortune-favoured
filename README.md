# Fortune Favoured

Fortune Favoured is an interactive fortune cookie that generates small, portfolio-friendly game ideas. Each idea combines a genre, setting, goal, unique twist, and realistic development-time estimate.

## Features

- CSS-only animated fortune cookie
- Random game ideas designed for projects lasting from 2 hours to 3 days
- Varied genres, themes, objectives, and gameplay twists
- Immediate repeat prevention
- Responsive, single-page interface
- No frameworks or build tools required

## Run locally

Clone the repository and open `index.html` in a browser:

```bash
git clone https://github.com/kylabuildsthings-oss/fortune-favoured.git
cd fortune-favoured
open index.html
```

Alternatively, serve it locally:

```bash
python3 -m http.server 8765
```

Then visit [http://localhost:8765](http://localhost:8765).

## Project structure

- `index.html` — page structure, styling, animations, and UI interaction
- `gameIdeas.js` — random game idea generation logic

## How it works

Click **Crack Open My Fortune** to split the cookie and reveal a generated game prompt. Click again to generate another idea.
