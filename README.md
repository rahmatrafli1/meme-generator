# Meme Generator

A simple React app for creating memes. Add top and bottom captions, then choose a random image from Imgflip's meme template collection.

## Features

- Add top and bottom captions.
- Choose a random meme image from the Imgflip API.
- Preview captions overlaid on the selected image.

## Getting Started

### Tech Stack

- React
- Vite
- Imgflip API: `https://api.imgflip.com/get_memes`

### Prerequisites

- Node.js and npm
- An internet connection to load meme templates from Imgflip

### Installation

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

### Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Usage

1. Enter captions in the **Top Text** and **Bottom Text** fields.
2. Click **Get a new meme image** to choose a random template.
3. Your captions will appear over the image.

## Project Structure

- `src/App.jsx` — Combines the header and meme generator.
- `src/components/Header.jsx` — Renders the app header and logo.
- `src/components/Main.jsx` — Handles caption input, loads meme templates, and displays the selected image.
- `src/index.jsx` — React application entry point.
- `src/index.css` — App layout and styling.
- `index.html` — HTML page loaded by Vite.
- `src/images/troll-face.png` — Header logo.
