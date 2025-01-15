# Frontend Developer Assessment Test

Goal: Build basics components for an e-commerce without any framework.

Tech stack: `HTML`, `CSS`, and `vanilla JS`.

Project setup:

```sh
node -v
# v20.11.0

npm --version
# 10.9.0

# Create project folder
mkdir fe && cd fe

# Initialize node project
npm init -y
```

Steps to setup [express](https://www.npmjs.com/package/express) to run the node local server:

```sh
npm install express

nano app.js
```

Add the following code in `app.js`:

```js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

Run the following command to start the local server:

`node app.js`

---

### Modules

1. Header
   - Nav items, hamburger menu in mobile, theme toggle

2. Hero
   - Generated image + For her, for him buttons.

3. Spotlight
   - Featured product cards
   - TODO: Add to cart button that add +1 besides cart icon

4. Sale banner
   - Change discount variable

5. FAQ
   - Accordions, learn more modal

6. Footer
   - Font selector

---

### [Fonts](https://fonts.google.com/)

- Bebas Neue
- Lora
- Jost
- Outfit

### Colors

- [Mocha Mousse](https://get-color.com/code/a47764)
- White smoke #F9F6F4 (light background color)
- #1D1D1D (dark background color)

### Assets optimization

The images are generated using the AI model [FLUX](https://www.krea.ai/apps/image/flux).

The icons are taken from the [heroicons website](https://heroicons.com/).

Images and icons are optimized to improve performance while maintaining resolution quality with the following command line tools: [jpegoptim](https://github.com/tjko/jpegoptim), [optipng](https://optipng.sourceforge.net/), and [svgo](https://github.com/svg/svgo).
