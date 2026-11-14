# Meme Generator

A simple React app for creating memes. Add top and bottom captions, then pick a random image from Imgflip's meme template collection.

## Features

- Edit top and bottom captions with live preview.
- Pick a random meme template from the Imgflip API.
- Captions are overlaid on the selected image.
- Automated unit, integration, and accessibility tests.

## Tech Stack

- [React 19](https://react.dev/) and [Vite](https://vite.dev/)
- [Imgflip API](https://api.imgflip.com/get_memes) for meme templates
- [Vitest](https://vitest.dev/), [Testing Library](https://testing-library.com/), [MSW](https://mswjs.io/), and jsdom for testing
- [ESLint](https://eslint.org/) for linting

## Prerequisites

- Node.js and npm
- An internet connection to load meme templates from Imgflip

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Available Scripts

| Command                 | Description                              |
| ----------------------- | ---------------------------------------- |
| `npm run dev`           | Start the Vite development server        |
| `npm start`             | Alias for `npm run dev`                  |
| `npm run build`         | Create a production build                |
| `npm run preview`       | Preview the production build locally     |
| `npm run lint`          | Lint the project with ESLint             |
| `npm test`              | Run tests with Vitest (watch mode)       |
| `npm run test:coverage` | Run tests and generate a coverage report |

## Usage

1. Enter text in the **Top Text** and **Bottom Text** fields.
2. Click **Get a new meme image** to load a random template.
3. Your captions appear over the image.

## How It Works

On mount, `Main` fetches the template list from `https://api.imgflip.com/get_memes` and stores it in state. Clicking the button selects a random template from that list. If the templates haven't loaded yet, the click does nothing.

## Testing

Tests live next to the code they cover:

- `src/App.test.jsx` — App composition
- `src/components/Header.test.jsx` — Header rendering
- `src/components/Main.test.jsx` — Caption input and random image behavior (Imgflip API mocked with MSW)
- `src/a11y.test.jsx` — Accessibility checks

```bash
npm test
npm run test:coverage
```

Coverage reports are written to `coverage/`.

## Project Structure

```
index.html                     HTML page loaded by Vite
src/
├── index.jsx                  React entry point
├── index.css                  App layout and styling
├── App.jsx                    Combines the header and meme generator
├── components/
│   ├── Header.jsx             App header and logo
│   └── Main.jsx               Caption inputs, template loading, image display
└── images/
    └── troll-face.png         Header logo
```
