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

## Notes Module 2 - Rendering Logic II

**Relative Positioning**

- _static_: positioned layout: items can overlap. By default every element has `position: static`.
- _relative_: 1. Constrains certain children 2. Enables additional CSS properties to be used.
  Setting position to value other than _static_ gives access to properties like `top` `left` `right` `bottom`. With _relative positioning_ those elements are _relative_ to their _natural position_. <br>
  `left: -10px` has same effect as `right: 10px`. <br>

Difference with _margin_: Position does not impact layout. Sometimes you want to shift around an item independently. Other times you want it to remain "context-aware". _Third solution_: transforms. <br>
Relative positioning can be applied to both _block_ and _inline elements_.

- _absolute positioning_: -> ignore natural position. <br>
  -> positioned based on their container. <br>
  Absolute positioning has **effect on layout**. It will take element out of flow: handy for element 'floating above' other content, like tooltip, modal etc. <br>
  Parent with absolute positioned element is seen as empty in terms of flow-layout. This causes the parent to **collapse**. <br>
  Absolute sizes: - will be as small as possible <br> - if content is to big it will line-wrap the content. <br> - if it can not line-wrap it will allow content to overflow. <br>

  **Party Trick** <br>
  _Angle Axis_: single axis absolute positioning. Setting left, but ommitting top/bottom keeps the element in flow position for `vertical axis` -> absolute positioned horizontally but relative vertical position is maintained. <br>
  _Horizontal position tweaks_ -> use margin (top) <br>
  _Absolute centering_: set `top`, `right`, `left`, `bottom` to `0` and give the element `width` + `height` + `margin: auto` to center absolute positioned element. <br>

**Containing blocks**<br>
Only _non-static_ elements can constrain _absolutely-positioned_ children! <br>

Algorithm for positioning absolutely-positioned element: crawl up the tree, look for non-static parent:

- if non-static parent -> parent will be containing bloack, absolute child will be anchored to it. <br>
- if non non-static parent, absolute element will be anchored to `inital containing block`: box size of the viewport at top of the document. <br>

Absolute positioned child will ignore padding of non-static parent. Padding is used in flow-layout, absolute elements are taken out of flow!

Absolute positioning is usefull for creating whimsical decorations. <br>

`.big.circle`: target big and circle class <br>
`.big .circle`: look in element with .big class for children with .circle class. <br>

**Tooltip** <br>
Tooltip and dropdown elements need position absolute so they don't push elements out of the way <br>

**Stacking contexts** <br>
The browser first paints the static items (based on DOM order) and then paints non-static items (based on _their_ DOM order)! <br>

**z-index** <br>
Explicitely specify to pain one sibling above another:

- Element should have position other than _static_
- Give element z-index value larger than sibling's value.

z refers to z-axis -> forward/backward <br>
x axis -> left/right <br>
y axis -> up/down <br>

Negative z-indexes are possibly, but better avoided because of the unneccasary extra complexity they add. <br>

_Stacking contexts_: any child of context is only compared with other children in this stacking context. A stacking context can be created by:

- any position other than _stacic_ + set `z-index`
- set `opacity` value less than `1`
- set position `fixed` or `sticky` (no z-index needed)
- apply `mixed-blend-mode` other than `normal`
- add `z-index` to child inside `display: flex` or `display: grid` container
- transform, filter, clip-path or perspective
- `isolation: isolate`

When possible rely on DOM order, don't use z-index (but don't mess up DOM order when it causes accessibility problems). <br>

`isolation: isolate` can be used to create unique stacking context, which doesn't force you to choose stacking order. It will conceal z-index from rest of the app, and can make your component self-contained and unopinionated about z-indexes. <br>

**Managing Global Layouts**

- React Portals: Give Wrapper `isolation: isolate` + use `react portal` to move your element out of DOM. Your modal will be inserted at the bottom of the DOM tree and it will be on top of other elements, whatever z-index they will have. <br>

## Module 3 - Styled components

### Exercise Button

Create a reusable button according to the provided design specs in figma. You should create variants for fill, outline and ghost, and large, medium and small size. Add default, focus and hover styles.
You should create your Button in the Button.js file in the `styled-components-button` folder.

### Exersises Workshop Module 3 - Mini Component Library

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

_Notes requirements ProgressBar:_ <br>

- use Icon component with id 'chevrond-down' for down arrow of select
- use native <select> element
- getDisplayValue function can be used to get text of selected value
- select should adjust width based on length of selected option
- when clicked, should use default select ui
- should have focus state --> default outline
- should have hover state --> text + icon become darker

_Notes requirements IconInput:_ <br>

- requires bold text --> use `font-weight: 700`
- small and large variant
- placeholder should be lighter gray and thinner font than filled-in-content
- can be given an explicit width property
- can be supplied different icons
- focus style: default outline with offset
- hover style: darken text + icon (but not placeholder text)
- should have visually hidden label
- when user clicks on icon, input should get focus

To start storybook: <br>
`cd mini-component-library` <br>
`npm install` <br>
`npm start` <br>

# Sole&Ankle — Module 4 workshop

In this workshop, the goal is to finish building an e-commerce store!

To start the project: <br>
`cd sole-and-ankle` <br>
`npm install` <br>
`npm start` <br>

## Exercise 1: SuperHeader

Build the superheader, a thin gray strip along the top of the page.
se Flexbox to correctly align the elements within the super header.

**Notes SuperHeader** <br>
SuperHeader is made up of the following components:

- Text on the left
- SearchInput on the right
- Help Link next to SearchInput of the right
- ShoppingBag Icon next to help Link on the right

- Use Icons from react-feather
- Assets can be found in `public/assets`
- Raleway font --> loaded in index.html
- Use `styled-components/macro` import for better debugging experience

## Exercise 2: Header

Create the main Header.

**Notes main Header** <br>
The main header consists of the following components:

- Logo on the left, aligned with marketing text of SuperHeader
- Nav-links in the middle
- Left most link has blue color, other links are gray

## Exercise 3: Shell

Work on "framing" around the shoe grid — the sidebar and title/filter.

**Notes on Shell** <br>
The Shell consists of the following components:

- Sidebar to the left
  - Active navlink = pink
  - Other links are gray
- Breadcrumb above sidebar:
  - breadcrumb link
  - breadcrumb separator: slash
- Title
- Filter:
  - Label (Sort)
  - Dropdown:
    - chevron down icon
    - selected value

## Exercise 4: Shoe Grid

### 4A: Grid layout

Create a grid layout for the shoes using flexbox.

### 4B: Final touches

This exercise is to recap what is learned in previous modules. It's not a flexbox exercise.
Add the "New Release" / "Sale" flag, and the sale price details.

** Notes 4A - Grid Layout** <br>

- GridItem consits of the following subcomponents:
- ShoeImage
- SalesDetails component which itself consists of the following subcomponents:

  - Shoe name, fontweight bold.
  - Shoe price, fontweight bold.
  - Number of shoe colors

- align GridItems using flexbox

** Notes 4B - Final touches** <br>

- Create tag component that can be reused for "Just released!" and "Sale" tag.
- tag component have 2 variants: released and sale, which have different background colors.

- Price should be aligned to right side (with image)
- When on sale, the normal price should display as striketrough, and the sale price should display below it in pink.
- Update Shoe price to support sale variant.

For more info about the exercises, see the README.md file in the `sole-and-ankle` folder.

# Module 5 - Responsive and Behavioral CSS

## Exercise: mobile-friendly-modal

Change the code so that the modal will be full screen on mobile devices. <br>

To start the project: <br>
`cd mobile-friendly-modal` <br>
`npm install` <br>
`npm start` <br>

## Exercise: scrollburglars

- 01-recut: Image is overflowing the container. Solution: add `max-width: 100% !important;` to `.prose image`. The `!important` is needed due to media-queries using `!important` for max-width.
  Other possible solution: Adjust media-query to:

```css
.max-w-md {
  max-width: min(28rem, 100%);
}
```

- 02-warp-and-weave
  Horizontal overflow is caused by use of negative margin on element with `.thrv_wrapper .thrv_contentbox_shortcode .thrv-content-box .tve-elem-default-pad`. Can be fixed by removing negative margin-right:

```css
@media (max-width: 1023px) [data-css="tve-u-5fac42ce99a412"] {
  /* margin-right: -40px !important; */ --> remove this margin
  margin-bottom: -10px !important;
  margin-top: 0px !important;
}
```

```css
@media (min-width: 300px)
[data-css='tve-u-5fac42ce99a412'] {
    /* margin: -30px -80px 0px 0px !important; */ --> remove this negative margin
    padding: 0px !important;
```

and remove negative margin from `@media (max-width: 300px) [data-css="tve-u-5fac42ce99a412"]` media-query.

03-blog-example

```css
.heading-decoration {
  position: absolute;
  top: -25px;
  right: 0px;
  width: 75px;
  height: 75px;
  background: papayawhip;
  opacity: 1;
  transform: translateX(12px) skew(-24deg);
}
```

is causing the horizontal overflow. <br>
Solution: change `right: 0px` to `right: 25px`.
