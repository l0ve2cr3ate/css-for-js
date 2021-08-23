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

## Module 3 - Modern Component Architecture - Notes
**Problems and Solutions** <br>
- css makes it hard to determine which styles are applied to element.
- css makes it hard to determine which styles can be removed.
- JS frameworks work with components, but css is not automatically scoped to a component.

Styled components can solve the above problems. It injects styles to the head and creates hashed classes for elements. With styled components there is no need to use BEM (Block Element Modifier: `promo__button--logged-in`) or think about classNames. Css modules also scope styles to a component. <br>

- specificity of _inherited_ style is 0, so that it can easily be overwritten. 
- layout properties like padding are not inherited. Most inherited properties are related to typography.

**Ecosystem World Tour** <br>
- **_Vanilla Css_**
  **Pros**:
    - less complexity, no runtime performance costs
    - css custom properties make sass variables redundant
  **Cons**:
    - global and unscoped. BEM can help.
    - need to add vendor prefixes
    - can't easily share data between CSS and JS

- **_Sass_**
  **Pros**:
    - for-loops, mixins, nesting
    - better DX
  **Cons**:
    - requires build step
    - global and unscoped
    - everything happens at build time. Sass variables are less powerfull that css variables.
    - requires native dependencies
    - naming conflicts with CSS, like native min vs Sass min.
    - becoming less popular -> less support

- **_Aphrodite_**: One of the first Css-in-JS libraries
  **Props**:
    - solves scoping and specificity issues
    - can use JS in CSS
    - encourages good habbits (no nesting)
    - automatically add vendor prefixes
    - similar API to React Native
    - styles and JSX in same file
  **Cons**:
    - requires build step
    - high-friction
    - adds bundle size + runtime execution time
    - styles must be written in JS: `content: '""'`
    - global styles -> funky solution
    - not very active anymore

- **_CSS Modules_**: tool that allows you to write vanilla CSS and import it to JS file.
  **Pros**:
    - solves scoping and specificity issue
    - feels like native css
    - compose feature to extend existing css classes

  **Cons**:
    - does not offer autoprefixing
    - hard to share data between CSS and JS
**Note**: Css modules are often combined with `PostCSS` for auto prefixing, transpiling, etc. <br>

- **_Single-File Components_**: vue & svelte option to create scoped CSS in same file as component. <br>
Has same pros and cons as css modules, only with advantage that styles live in component file. <br>

- **_Styled-Components_**: CSS-in-JS: every style is a React Component <br>
  **Pros**: 
    - solves scope and specificity issues
    - feels like writing css
    - good solutions for animations + global styles
    - high developer satisfaction
    - performant CSS-in-JS solution
    - supports SSR (server side rendering)
    - most popular CSS-in-JS solution
  **Cons**:
    - requires build system
    - primarily React tool
    - less clear what the underlying html markup is, harder to check html semantics.

- **_Emotion_**: CSS-in-JS solution, has much in common with styled-components. <br>
  **Pros**:
    - can be used without React
    - slightly smaller bundle size compared to styled-components
  **Cons**:
    - less popular that styled-components
    - different dynamic prop approach, slightly less flexible

- **_Tailwind_**: utility-first css framework: maps classes to specific styles <br>
  **Pros**:
    - solves scope and specificity issues
    - encourages good habbits
    - includes built-in design tokens
    - fast to write
    - not React specific
    - quite popular

  **Cons**:
    - steeper learning curve than other tools
    - not all css can be turned into utility
    - smaller than styled-components
    - adds a lot of 'bulk' to your markup, hard to read

**Styled Components 101** <br>
Styled components uses _stylis_ a Sass preprocessor to add vendor prefixes, and make it possible to use & character. It can be seen as a placeholder which will be replaced with a class, when generated. <br>

`&` is also coming to CSS. <br>
`&:before` elements are not selectable like text elements. <br>

**CSS Prop** <br>




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
- use native `<select>` element 
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

In this workshop, the goal is to finish building an e-commerce store! <br>

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

## Module 5 Workshop - Sole and Ankle Revisited
To start the app: <br>
`cd sole-and-ankle-revisited`<br>
`npm install` <br>
`npm start` <br>

- Exercise 1: Set up breakpoints
- Exercise 2: Mobile header:
On Mobile screens the SuperHeader is removed and replaced with a decorative dark-gray line. The Header's navigation is replaced by 3 icon buttons.
- Exercise 3: Tweaks to our main view
On portrait tablet, our left-hand column disappears. <br>
The categories are really more of a nice-to-have, so they're removed. The breadcrumbs, though, are important for navigation, so they move to sit just above the category heading. <br>
On mobile, we lose the "Sort" filter as well <br>
- Exercise 4: Mobile menu
Implement the hamburger menu. A new component has been created for you, MobileMenu. Your job is to make it look and act like a modal. <br>
Update the hamburger-menu button added in Exercise 2 to flip showMobileMenu to true. <br>
Use the `@reach/dialog` package to make sure that the modal is accessible. <br>
- Exercise 5: Fluid desktop navigation
The desktop navigation disappears just before it runs out of space. <br>
Manage the overflow in the header to scroll this section when it doesn't fit. <br>
Use fluid gaps between the nav links, to reduce the likelihood that it will not fit. <br>
**Goal:**

Spacing between items stretches and squashes depending on window width, and when the window gets too small, the content overflows with a scrollbar spanning the header. 
- Exercise 6: Theming with CSS Variables
In this exercise, your goal is to update the project to use CSS variables for colors, and optionally font-weights.

**BONUS**: The modal backdrop should use a CSS variable that is created using fragments from the main colors.

## Notes Module 5 - Responsive and Behavioral CSS
**Working with Mobile Devices** <br>
- _adaptive design_: serve different HTML files depending on user-agent.
- _responsive design_: all clients receive identical HTML files from server, but these files will display differenlty on different devices. -> less work than _adaptive design_ but more complex. <br>

**More Pixels** <br>
_DPI_: Dots Per Inch -> pixel density. <br>
Phones have more pixels than desktop computers. <br>
Mobile devices have _devices pixel ratio_: `window.devicePixelRatio`: ratio between physical LED pixels and 'theoretical' pixels in CSS. <br>
Use large images on high DPI screens, so they look sharp. <br>

**Meta Tag** <br>
```html
<meta
    name="viewport"
    content="widht=device-width, inital-scale=1" 
    <!-- Instruct browsers to start set viewport width to match device's width and start at 1x zoom  --> 
>
```

**Mobile Testing** <br>
- test on real mobile devices -> include low end devices.
- use a service like browserstack

**Local development flows** <br>
- To access localhost using a mobile device, you can use a service like _ngrok_.
- Remote debugging: 
  - iosPhones: enable remote debugging in Iphone settings
  - windows: use _Inspect_ to debug ios devices using Chrome devtools.

**Media Queries** <br>
```css
@media (max-width: 650px) {
  ...
}
```

- `@media`: _at-rule_: changes behavior when certain condition is met. `@key-frames` is another _at-rule_. 
- media-queries allow to _merge_ rules together
- media-queries don't affect _specificity_ -> this means you should put your media-queries in the right order. <br>

**Media Queries and Styled Components** <br>
In Styled Components you can nest media-queries within a component. This means that you can keep all the media-queries of an element together. `Sass` also supports nested media-queries. <br>

**Mobile-first vs desktop-first** <br>
- `@media (max-width: 650px)` -> desktop-first: default styles target desktop. Overrides are for mobile.
- `@media (min-width: 650px)` -> mobile-first: main styles are for mobile. 
Be consistent. Don't mix both. <br>

`revert`: special keyword that restores property to default value. `display: revert`. <br>

**Building Accessible Modals** <br>
- Modal should work with keyboard.
- Opening a modal should add focus first interactive element of the modal
- Focus should be locked to modal
- Modal should close on escape
- When modal is closed focus should be restored to element that had focus before modal was opened.
- User should know they are in a modal (screen-reader should announce this).

For accessible modal, you can use a library like `reach-ui` <br>

**Other Queries** <br>
- **Hovering** -> only posible using `pointer-device` like mouse/trackpad.
iOs Safari + Android -> tapping on interactive element triggers hover state. This can be annoying.
Hover events are `mouse/trackpad` related, not `big screen` dependepent. <br>

```css
@media (hover: hover) and (pointer: fine) {
  button:hover {
    ...
  }
}
```
 _Interaction Media Features_ -> allows to apply styles based on the users input mechanism. <br>
 _hover_: ability for device to move cursor without triggering click/tap on element underneath. Mouse can hover, but finger can not. <br>
 _pointer_: level of control user has over position of cursor. <br>

 **Boolean Logic in Media Queries** <br>
 ```css
 @media (hover: hover) and (pointer: fine) {
   ...
 }
 ```

 the `and` in the media-query above works same as `&&` in javascript.

 **Preference-based Media Queries** <br>
  ```css
 @media (prefers-color-scheme: dark) {
   ...
 }
 ```
 
 **Breakpoints** <br>
 Put breakpoints in _dead zones_ (where there are no/little devices):
 - mobile: 0 - 550px 
 - tablet: 550px - 1100px
 - laptop: 1100 - 1500px
 - desktop: 1500+px
 When choosing breakpoint values, you should keep your design in mind. <br>

 **Implementing breakpoints** <br>
 - desktop-first: from biggest to smallest screen
 - mobile-first: from smallest to biggest screen

 **Managing Breakpoints** <br>
 You can create constants for your breakpoints: <br>

 ```javascript
 const BREAKPOINTS = {
   tabletMin: 550,
   laptopMin: 1100,
   desktopMin: 1500
 }

 const QUERIES = {
   'tabletAndUp': `(min-width: ${BREAKPOINTS.tabletMin}px)`,
   'laptopAndUp': `(min-width: ${BREAKPOINTS.laptopMin}px)`,
   'desktopAndUp': `(min-width: ${BREAKPOINTS.desktopMin}px)`
 }

 @media ${QUERIES.tabletAndUp}
 ```

You can also add the QUERIES to Styled Components Theme if you want. <br>

**Media Query Units** <br>
Use `rem` so the layout gets adjusted when user cranks up default font-size. <br>

```css
@media (min-width: 68.75rem) {
  ...
}
```

`16px` base font-size -> 68.75 * 16 = 1100px <br>
`24px` cranked up font-size -> 68.75 * 24 = 1200px <br>
-> rem-based viewports scale with user's chosen default font-size. As font-size gets bigger, breakpoints slide up the scale. <br>

**Deviating from breakpoints** <br>
You can occasionally use a custom value. If you need custom values often, then your breakpoints might need adjustment. They should work for 80-90%. <br>

**CSS Variables** <br>
_Custom Properties_: css variables function like properties. <br>
Syntax for declaration: `--some-var: blue;`. Custom properties are inheritable. <br>
Syntax for usage: `color: var(--some-var);` <br>

**Not Global** <br>
Css variables are not global. You can attach them to an element. When you place them on `:root` you can access them globally. <br>

`@property` allows you to configure a specific variable. You can specify that it should not be inherited: 

```css
@property --some-var {
  syntax: <color>;
  inherits: false;
  initial-value: blue;
}
```
Above is new syntax that is only supported by Chrome and Edge June 2021. <br>

**Default values for css variables** <br>
`var` function takes 2 arguments. 2nd argument = default value.

**Reactive properties** <br>
Css variables exist at _runtime_. `Sass/less` variables are compiled away when you build the site. Css variables are _reactive_: when there value changes, any property that references that value also changes! <br>

Css variables can be used with styled-components and other JS Frameworks. <br>
Css variables can be updated in media-queries. <br>

It is possible to create _variable fragments_: <br>

```css
border: var(--standard-border-width) var(--border-details);
```

Css variables are _composable_: <br>
```css
--color-primary: hsl(
  var(--pink)
  var(--intense)
);
```

Css variables can be combined with `calc()`. <br>

**Unit conversion** <br>
`calc()` can be used to convert `px` to `rem`. <br>

**Calculating colors and gradients** <br>
`-- orange: hsl((calc(--red-hue) + 20deg) var(--intense));` <br>
hsl -> hue is circular value. <br>
A linear gradient has three parts: <br>
- direction
- start color
- end color

```css
--start-color: calc(var(--root-hue) - var(--range));
--end-color: calc(var(--root-hue) + var(--range));

background: linear-gradient(45deg, hsl(var(--start-color) 100% 50%), hsl(var(--end-color) 100% 50%));
```

**Viewport units** <br>
Css has types: `length`, `color`, `angle`. <br>
`length` contains units like `px`, `rem`, `ch`, viewport units (`vw`, `vh`). <br>

**Mobile height issue** <br>
When a page is loaded on mobile the address bar is taller, when you start scrolling it shrinks to fit more content. `vh` unit refers to the largest possible height (the height of the screen with shrunk addressbar after scroll). This causes elements to not fit on the screen at first with `100vh`. <br>
**Solution** <br>
- JS solution to change how vh units work, like `viewport-units-buggyfill`
- Use percentages and pass them down -> put `height: 100%` on html + body + use `height: 100%` or `min-height: 100%` on the elements you need.
- Tweak the design so it does not fill the viewport exactly.

**Desktop scrollbar issue** <br>
`vw`: viewport width does not take scrollbar into account -> causes horizontal overflow on desktop. On mobile the scrollbar floats on top of the content, so there this problem does not exist. <br>
**Solution** <br>
Calculate scrollbar width with JS: <br>
```javascript
// window.innerWidth = viewportWidth (including scrollbar)
// document.documentElement.clientWidth - viewportWidth without scrollbar
const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

// Store viewportWidth in css variable:
document.documentElement.style.setProperty('--scrollbar-width', scrollbarWidth + 'px');
```

**Responsive Typography** <br>
- _Body Text_: text in paragraphs an lists. Size of body text should stay the same across devices, and should be at least 16px (but you should use rem -> 1rem).
- _Smaller Text_: For example photo captions. If text is important, it should be bigger on mobile so it is readable.
- _Form Fields_: small default font-size -> hard to read on mobile. iOs Safari will automatically zoom in to focused fields with small text. This makes the text more readable, but can make it hard to fill out the form. You can prevent this zooming from happening by using a font-size of at least 16px.
- _Headings_: Should be smaller on mobile.

**Fluid Typography**: typography smootly scales with viewport. Accomplished with `vw` unit. <br>
**Problem 1**: ridiculous on very small/large screens. <br>
**Solution for problem 1**: Use `clamp` to set bounds: `font-size: clamp(1.5rem, 6vw, 3rem);` <br>
**Safari quirk**: Safari does support `vw` and `clamp`, but only calculates the value when the element first appears. It won't recalculate fontsize after window resizes. <br>
**Fix for safari quirk**: <br>
```css 
h1 {
  font-size: clamp(1.5rem, 6vw, 3rem);
  min-height: 0vh;
}
```
--> using `vh` elsewhere forces the browser to refresh all viewport units, including the one used in `clamp`. <br>
**Problem 2**: Accessibility violation. Text should be scalable up to 200%. When viewport units are used for fontsize, text is locked at that size. <br>
**Solution for problem 2**: Mixing viewport units with relative unit. <br>
```css
h1 {
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
  min-height: 0vh;
}
```
4vw -> controlled by resizing viewport <br>
1rem -> controlled by user's fontsize <br>
In `clamp`, `min` and `max` functions there is no need to use `calc`, calculations are executed automatically. <br>

**When to use Fluid Typography** <br>
Use fluid typography for headings or other large text elements. <br>
Don't use fluid typography for body/smaller text. <br>

**Fluid Design** <br>
Scaling text based on viewport can be done using:
1. media-queries -> responsive
2. shrink/grow text using `vw` unit -> fluid
Same applies to design. Fluid approach can be accomplished using flexbox/grid.

## Notes Module 6 - Typography and Images

**Text Rendering** <br>
- Kerning
Letter placement differs slightly across browers because of different kerning algorithms. <br> *Kerning*: spacing between individual characters. <br>
Use `font-kerning: none` to disable kerning. <br>
`letter-spacing` allows you to change the space between individual characters. The browsers doesn't do any kerning for *monospaced* fonts. <br>

- Text Rasterization
The browser's *operating system* also affects how typography us rendered. Nowadays fonts mostly use *vector* formats, like `ttf`, `otf`, `svg` or `woff/woff2`. Vector fonts can be scaled to any size without looking pixelated/blurry. To display a vector font on the screen, the browser needs to apply *rasterization*: process of deciding what color each pixel needs to be. This can be most simply done by filling pixels that the vector path crosses, but this results in pixellated text. The browser can make the font look smoother by *anti-aliasing*. Both browser and operating system play a role in rasterization and anti-aliasing. <br>

- Font Smoothing
`-webkit-font-smoothing` property allows you to switch aliasing algorithm of the browser, BUT: it only works on MacOS, and only in Chrome/Safari/Edge. <br>
The default is `subpixel-antialiased`, which uses RGB elements of a pixel to produce more-precise anti-aliasing. Nowadays the pixel arrangement has become more complex, and Apple no longer thinks subpixel-antialiasing gives an advantage anymore, so it is disabled since MacOS Mojave (2018), BUT: Chrome and Safari don't inherit the system default. You need to actively change it: 

```CSS
*, *:before, *:after {
  -webkit-font-smoothing: antialiased;
}
```

**Other Browsers**
MacOS Firefox has `moz-osx-font-smoothing` property, but this only allows you to toggle between `grayscale` and `auto`. It doesn't seem very useful. <br>
On Windows there are no properties at all. <br>

*WebKit*: browser rendering enginge created by Apple. In 2013 Google forked WebKit and created *Blink* rendering engine, nowadays used by Chrome and Edge. <br>

**Text Overflow**
A browser groups characters into *words*: a collection of characters that can't be broken up. Words are separated by *breaking characters* like whitespace and `-`, referred to as *soft wrap oppertunities* in CSS specification. When content doesn't fit in the containing block, the browser looks for the closest soft wrap oppertunity, and places the text after this on a new line. <br>

- Non-breaking spaces
`&bnsp;` can be used to add a space that's not a soft line wrap oppertunity.

- Balanced Text
Default text-placement can lead to *widows*: single word on last line of paragraph. Adobe has made a CSS proposal got and alternative-text placement algorithm + JS polyfill.

- Wrapping onto multiple lines
Long words can't be broken up by default text-placing algorithm. They have no soft wrapping oppertunity. With `overflow-wrap: break-word` you can change the default text-placing alogorithm and line wrap long words.

- Hyphenation
You can add hyphens to indicate *word-breaks*: `hyphens: auto` <br>
-> NOTE:  <br>
  - only works when `lang` attribute in `<html>` is set, and doesn't work for all languages.
  - on certain browses `hyphens: auto` won't affect certain strings like URLs.
  - hyphens will not be selectable, so line-broken urls can still be copy/pasted.

- Ellipsis
  Break text off if it doesn't fit. <br>
  **Single line ellipsis** <br>
  ```CSS
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; 
  ```

  **Multiline ellipsis** <br>
  ```CSS 
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  ```
  NOTE: Watch out using the above code with flexbox/grid. Avoid issues by applying line clamping to element that isn't being stretched/flexed by flexbox/grid -> use wrapper div. <br>


