# css-for-js

CSS for Javascript Developers by Josh Comeau - https://css-for-js.dev/

## Module 1 - Rendering Logic I - Flow Layout

Assignment: build a minimal landing page for an agency without using flexbox, grid or absolute positioning. <br>
The mockups for the landing page can be found in the `huckleberry/docs` folder. <br>
There are mockups for desktop, tablet and mobile. You only need to add code in the css file. <br>
More info can be found [here](https://github.com/l0ve2cr3ate/css-for-js/blob/main/huckleberry/README.md). <br>

To start the app: <br>
`cd huckleberry` <br>
`npm install` <br>
`npm start` <br>

## Module 2 - Rendering Logic II - Stacking Context exercise

Assignment: The provided app has some problems. These need to be fixed.

- loader intermingles with navbar (treat loader as library, you can't change it)
- sidebar is above navbar, but should be below
- help icon should be on top of sidebar

You can see these problems when you scroll.

To start the app: <br>
`cd stacking-context-exercise` <br>
`npm install` <br>
`npm start` <br>

## Module 2 - Rendering Logic II - character-creator

In this workshop, you'll build a Sims-style character creation screen.
You only have to work on a desktop version, but if you want a challenge, you can also create mobile styling.

## Exercises

- Exercise 1: Fix footer link - make footer links readable
- Exercise 2: Layout adjustments - the content in the page is to wide and the character is to big.
- Exercise 3: Overflow - create horizontal scrollbar for control panel with too many options to fit.
- Exercise 4: Perspective decoration - a light gray bar should extend across the bottom 40% of the screen. Bonus points for not using z-index.
- Exercise 5 (Bonus): Implement a mobile variant - on mobile devices, the cards should stack horizontally, and sit near the bottom of the screen, underneath the character

You can find more info in the README.md file in the `character-creator` folder.

## Module 3 - Styled components

### Exercise Button

Create a reusable button according to the provided design specs in figma. You should create variants for fill, outline and ghost, and large, medium and small size. Add default, focus and hover styles.
You should create your Button in the Button.js file in the `styled-components-button` folder.

### Exersises - Mini Component Library

In this workshop, you'll build 3 components from scratch:

1. ProgressBar
2. Select
3. IconInput

For more info see the README.md file in the `mini-component-library` folder.

_Notes requirements Progress Bar:_ <br>

- should accept **value** prop
- support numbers between 0 and 100
- should be accessible
- 3 sizes: small, medium, large
- large size has inner padding
- inner bar (large size) should be rounded on left, on right it should be rounded only when it approaches 100%.
- use provided box-shadow (README.md file in the `mini-component-library` folder)

_Accessibility:_<br>

- **progressbar role** should be used for element that displays progress status for task that takes a long time of consists of several steps.
- if actual value of progressbar can be determined, it should be indicated using `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes.
- if progress value is indeterminate, `aria-valuenow` should be omitted.
- `aria-valuenow` should be updated dynamically to indicate the progress.
- if progressbar describes loading progress of particular region of a page, `aria-describedby` should be used to point to the status, and `aria-busy` should be set to true on the region, until finished loading.
- Screen readers will display the value of `aria-valuenow` as a percentage of the range between the value of `aria-valuemin` and `aria-valuemax`. You can change this using `aria-valuetext` which will give a human readable text alternative for `aria-valuenow`.

To start storybook: <br>
`cd mini-component-library` <br>
`npm install` <br>
`npm start` <br>
