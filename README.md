<div align="center">
   
![HTML Badge](https://img.shields.io/badge/-HTML-3B4252?style=flat&logo=html5&logoColor=D08770)
![CSS Badge](https://img.shields.io/badge/-CSS-3B4252?style=flat&logo=css3&logoColor=81A1C1)
![JavaScript Badge](https://img.shields.io/badge/-JavaScript-3B4252?style=flat&logo=javascript&logoColor=EBCB8B)

</div
  
<br>
<br>

> if you've ever landed on someone's github profile and thought "wait, how did they make it look so cool?"... this is how!👾

<br>

# Animated Banner for your GitHub README
This repository contains the code for a simple animated banner you can add to your GitHub profile README.
No frameworks, no installs, just plain html, css, and js. 

This project is perfect for enhancing your personal website, portfolio, or any web page where you want to display your coding skills creatively.

## Table of Contents
- [Overview](#overview)
- [Getting Started](#getting-started)
- [Customisation](#customisation)

## Overview

This banner includes:
- scrolling animated skills bar with your keywords
- a typewriter effect for your greeting
- a subtle grid background + corner aspects
- a blinking cursor that looks cool

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/animated_banner_github.git
   ```

2. **Open the folder in VSCode**

3. **Install the LiveServer extension**

   - Search "LiveServer" in the extensions tab and hit install

5. **Right-click 'index.html' --> open with LiveServer**

   - The file will open in your browser and look pretty :)

Note: Simply double-clicking the index.html file to opwn it may cause it to not load in properly (the css may not load). make sure to use LiveServer.
   
## Customisation

**change the typing text** — in `script.js`:
```js
const text = "Hi, I'm Anusha";
```
 
**change the skill bar words** — in `script.js`:
```js
const barData = [
  { word: 'AI',     color: 'b-cyan',   dots: [1, 1, 1, 0] },
  { word: 'PYTHON', color: 'b-amber',  dots: [1, 1, 1, 1] },
];
```
 
**change the tagline** — in `index.html`:
```html
<span class="tag-text tc1">Cognitive Science</span>
<span class="tag-text tc2">ML & Neural Computation</span>
<span class="tag-text tc3">Data Science</span>
```
 
**available bar colors:**
 
| class | color |
|-------|-------|
| `b-cyan` | blue |
| `b-purple` | purple |
| `b-green` | green |
| `b-pink` | pink |
| `b-amber` | yellow |
| `b-sky` | light blue |


## Adding it to your Profile
 
GitHub READMEs don't support live html, so you'll convert it to a gif first.
 
**Step 1 — record it**
- open it in chrome via live server
- screen record your browser tab
- record ~6 seconds to capture the animations, then stop
 
**Step 2 — convert to gif**
- go to [ezgif.com/video-to-gif](https://ezgif.com/video-to-gif)
- upload your screen recording, hit convert, download the gif
 
**Step 3 — add to your README**
- upload the gif to your profile repository (`yourusername/yourusername`)
- add this to the top of your `README.md`:
 
```markdown
![banner](./animated_banner.gif)
```

## and that's it! you did it! :)
