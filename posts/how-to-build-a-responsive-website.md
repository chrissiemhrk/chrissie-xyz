---
title: How to build a responsive website
excerpt: 'Learn how to build a responsive website using HTML and CSS.'
date: 'August 7th, 2020'
cover: '/images/posts/responsive.png'
cover_alt: 'Responsive logo'
tags: ['responsive', 'html', 'css']
---

Making your website responsive is a must nowadays, nearly 53% of people all around the world use their phone to access the internet and that number is growing each day.

You want your website to be accessible to everyone no matter their device be it small or large screens. In this article, I'll be sharing what methods I use to make my websites responsive.

#### Mobile first design

Mobile First means designing for mobile before designing for desktop. It will also make the page load faster on a smaller screen.

When you're starting a new project make sure to always design it for mobile screen first and to do that, I usually size my browser to 320px wide (the screen size of an iPhone 5/SE).

Personally, I found that expanding my design to fit bigger screens is much easier than trying to compress the design to fit smaller screens.

#### Set the viewport

The viewport is the area of the screen that the browser can render content to, to make a website responsive it has to be set properly, and to do that we use a meta tag.

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

- width=device-width tells the browser to match the dip (device independent pixels can determine the size that elements will appear on the user's device, regardless of the user's screen resolution. ) and thus the page can reflow to allow content to resize to match the width of the browser

- initial scale 1 set the dip to CSS pixel ratio to one, CSS pixels are the ones we work with most of the time and without initial scale set to one, the width of some browser would stay the same when you rotate your phone or tablet to landscape mode.

#### Use relative units

To avoid fixed images, use a relative unit like % instead of px.

```css
img,
embed,
object,
video {
  max-width: 100%;
}

// I always put this in my CSS file just to be safe
```

#### Tap target should be wide enough

Tap targets (buttons, input field, anything the user will touch, tap, click) must be at least 40px wide and tall. The recommended height and width are 48px.

This isn't much of a problem for large screens since a mouse can be pretty accurate but on mobile, it can be a big problem when the tap target is too small to be able to accurately tap on the button/input field. The same problem may occur with navigation links so make sure to also adjust them accordingly.

```css
button,
input {
  min-width: 48px;
  min-height: 48px;
}

// Again, I always put this in my CSS file just to be safe
```

#### Use flexbox

Flexbox makes designing for all types of screens easier. Its a layout model that allows responsive elements within a container to be automatically arranged depending on the screen size.

Trust me using flexbox will make your life easier.

#### Use media queries

Media queries are used to rearrange your design to fit different screens. The most commonly used are max-width and min-width.

max-width viewport width is less than the value specified whereas min-width viewport width is greater than the value specified.

When I'm done working on the 320px screen, I use media queries to apply styles depending on the screen breakpoint.

```css
@media screen and (max-width: 500px) {
changes will apply when the viewport width
is less than 500px;
}


@media screen and (min-width: 500px){
changes will apply when the viewport width
is greater than 500px;
}
// If you started mobile-first, I recommend using min-width
```

#### Determine breakpoints

By breakpoints I mean the width you'll be using with media queries to change the layout accordingly. There are two types of breakpoints:

- Major breakpoints were layout changes significantly
- Minor breakpoints to make small changes like setting the margin, padding, or font size

When setting breakpoints use the content, after coding with a mobile-first approach adjust the browser and see where your content needs a breakpoint. This is a much better approach than following devices sizes that are given by default by the dev tools since they change and vary widely from brand to brand.
