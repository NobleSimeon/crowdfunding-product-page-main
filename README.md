# Frontend Mentor - Crowdfunding product page solution

This is a solution to the [Crowdfunding product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [github repo](https://github.com/NobleSimeon/crowdfunding-product-page-main)
- Live Site URL: [link](https://crowdfundingpp.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Destop-first workflow


### What I learned

In this project, i learned how to work with svg files though not professionally. And I was able to create a modal popup. 
And when the modal is active, the body doesn't move

```html

```
```css

```
```js
function toggleModal() {
    /* Detect the button class name */
    const overlayOpen = this.className === 'open-modal';
    
    /* Toggle the aria-hidden state on the overlay and the 
       no-scroll class on the body */
       modal.setAttribute('aria-hidden', !overlayOpen);
       body.classList.toggle('noscroll');
}
```


### Continued development

I want to focus on how to get the DRY principles right. 
In this project, I notice I'm not that good in creating navbar and make use of animations. I'd love to deep dive into that 


## Author

- Website - [Ojelabi Simeon](https://github.com/NobleSimeon)
- Frontend Mentor - [@NobleSimeon](https://www.frontendmentor.io/profile/NobleSimeon)
- Twitter - [@SimeonPelumi](https://www.twitter.com/SimeonPelumi)


