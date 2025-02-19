# hb-hummingbird

![npm](https://img.shields.io/npm/v/hb-hummingbird?color=blue) ![License](https://img.shields.io/npm/l/hb-hummingbird) ![GitHub Repo stars](https://img.shields.io/github/stars/khayrul-dev/hb-hummingbird?style=social)

**hb-hummingbird** is a modern **UI component library** built with **Tailwind CSS**, designed to help developers quickly build beautiful and responsive user interfaces.

## 🚀 Features
- **Tailwind-based components** for easy styling.
- **Modular and lightweight** design.
- Supports **ESM and CJS** imports.
- **Optimized CSS & JS** builds.
- Compatible with **Astro** and **Vite**.

## 📦 Installation

Install via npm:
```sh
npm install hb-hummingbird
```

Or via yarn:
```sh
yarn add hb-hummingbird
```

## 🛠 Usage

### Import in JavaScript/TypeScript
#### ESM Import
```js
import { ComponentName } from "hb-hummingbird";
```
#### CommonJS Import
```js
const { ComponentName } = require("hb-hummingbird");
```

### Include the CSS
In your `index.css` or main entry file:
```css
@import 'hb-hummingbird/dist/hummingbird.min.css';
```

## 📜 Scripts

### Development
```sh
npm run dev  # Start Astro dev server
```

### Build
```sh
npm run build:dist   # Build the library & CSS
npm run build:astro  # Build the Astro documentation
npm run build:js     # Compile TypeScript and JS
npm run build:css    # Generate CSS
npm run build:css:min  # Generate minified CSS
```

## 📂 Folder Structure
```
.
├── src/        # Source files
├── lib/        # Compiled JS (ESM & CJS)
├── dist/       # Compiled CSS
├── docs/       # Documentation
└── README.md
```

## 🔗 Repository
Find the source code and contribute on GitHub:
[GitHub Repository](https://github.com/khayrul-dev/hb-hummingbird)

## 📜 License
This project is licensed under the **MIT License**.

