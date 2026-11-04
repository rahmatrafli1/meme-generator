# Meme Generator

A simple React app for creating memes. Enter custom top and bottom captions, then choose a random image from the Imgflip meme template collection.

## Features

- Edit top and bottom captions.
- Choose a random meme image from the Imgflip API.
- Preview captions overlaid on the selected image.

## Getting Started

### Tech stack

- React
- Vite
- Imgflip API (`https://api.imgflip.com/get_memes`)

### Prerequisites

- Node.js and npm
- An internet connection to load meme templates from Imgflip

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL printed by Vite in your browser.

### Build for production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Usage

1. Enter text the **Top Text** and **Bottom Text** fields.
2. Select **Get a new meme image** to display a randomly selected template.
3. Your captions appear over the image.

## Project Structure

- `App.jsx` — Combines the header and main meme generator.
- `components/Header.jsx` — Renders the app header and logo.
- `components/Main.jsx` — Manages caption input, fetches meme templates, and displays the selected image.
- `index.jsx` — React application entry point.
- `index.css` — App layout and styling.
- `index.html` — HTML page loaded by Vite.
- `images/troll-face.png` — Header logo.
