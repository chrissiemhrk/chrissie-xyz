---
title: What is semantic HTML and why should you use it?
excerpt: 'The what, why, and how of semantic HTML.'
date: 'January 19, 2021'
cover: '/images/posts/html.png'
cover_alt: 'HTML logo'
tags: ['HTML', 'Accessibility']
---

As a web developer chances are you must have heard of the term semantic HTML at least once. Semantic HTML is an important principle in web development and in this article, you'll learn what's semantic HTML, why you must use it, and the way to use semantic HTML.

## What's semantic HTML?

In programing, semantics refers to the purpose or role of a piece of code. Plenty of HTML tags have a semantic meaning, which means that they are defined to have a specific meaning that conveys some information about the sort of content contained between the opening and closing tag. This allow web browsers, search engines, and screen readers to make sense of your markup by adding meaning to it.

For example the `<nav>` element represent a group of navigation links and the `<footer>` element represent the footer section of a page.

## Why do you have to use semantic HTML?

As I wrote above, semantic HTML allow web browsers, search engines, and screen readers to make sense of your markup by adding meaning to it. This is can be especially important if you wish your website to be maintainable, to be accessible to all your visitors, and to achieve a better SEO ranking.

**Maintainability**

Maintainability is something that should always be at the forefront of your mind when developing be it a website or a mobile application, it is also a key factor in writing high quality code. Semantic HTML helps us in that clear, easy to read code is more maintainable. It allows you quickly look at your code and know what is going on and in the future allow for easy editing.

Another benefit would be that we don't have a reference our elements with classes or ids, writing semantic HTML allows you to reference all your elements with CSS directly using the tag with the use of classes or ids.

**Accessibility**

Accessibility is a very important area of the website that cannot be ignored. Semantic HTML plays a big role in increasing the general accessibility of your website and conveys better meaning without compromising the code structure. It provides the guidance needed to properly transcribe your content to your audience, one example can be screen readers.

Screen reader is an assistive technology that converts text and image content to speech and braille. For screen readers to understand your content they have to scan it and this is made easier by using semantic HTML which makes your markup better understandable for the screen reader and thus making your content accessible to users that cannot read.

**SEO**

Search Engine Optimization is the process of improving the quantity and quality of traffic to a website from search engines. SEO is another section where making your markup easier to grasp for machines comes in play. If a search engine can't read your website, it won't properly rank it and it will probably be flag as low quality.

If you want your website to be seen, it has to be ranked by search engines and the best way to do that is to use semantic HTML to make your content readable by the machine so that the search engine's algorithm can properly rank you website.

## How to write semantic HTML

Now that you understand what is semantic HTML and why you should use it when building your website, let's see how you can write semantic HTML. To write semantic HTML the only thing needed is to use the proper HTML tags that conveys information about the type of content contained between the opening and closing tag.

There are HTML elements that are semantic and others that are not. An example of a non-semantic HTML tag would be `<div>` or `<span>` as these tags don't convey any information about the content inside.

In the case of semantic HTML, we can divide them into three categories:

- Section elements
- Text elements
- Media elements

### Section elements

These are elements that helps you to arrange your document into separate blocks. Section elements are mainly used to create the outline of your webpage.

`<header>` represents the header container of the web page. It's usually contains navigation links, logo, a search bar, etc.

`<main>` represents the main content of the web page and can only be used once in a page.

`<footer>` represents the footer container of the web page. It's usually contains copyright data, author of the section, or links to related documents.

`<nav>` represents a set of navigation links. It's usually used inside the `<header>` and `<footer>` section of the page but can also be used inside the `<aside>` section.

`<aside>` represent content that is related to the main content of the web page but isn't part of it. It can also be used to create a sidebar. An example could be a page displaying a blog post, the `<aside>` element could be used to display links to other related articles to the article inside the `<main>` element.

`<section>` represents standalone sections within the web page that don't have a more specific element to represent it.

`<article>` represents self contained blocks of content such as blog posts which can be reused in other settings.

`<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` represent section heading. `<h1>` is the highest level and most important one while `<h6>` is the lowest.

### Text elements

These are elements that are used to organize blocks of content, these are important for SEO and accessibility. Some elements in this category can be applied to a single word or line of text.

`<blockquote>` represents text that is a quotation from another source.

`<ol>` represents an ordered list, usually displayed as a numbered list.

`<ul>` represents an unordered list, usually displayed as a bulleted list.

`<li>` represents an item inside a list.

`<p>` represents a paragraph.

`<hr>` represents a break between paragraphs.

`<strong>` represents content that is given importance or urgency, usually displayed in bold.

`<small>` represents small prints like copyright, usually displayed in a smaller font-size.

`<figure>` represents content such as illustrations, diagrams, etc.

`<figcaption>` represents the caption for a `<figure>` element.

`<cite>` represents the reference of a cited work.

`<code>` represents a short piece of code.

`<time>` represents a specific period of time.

### Media elements

These are elements that are used to identify the different type of media that can be found in a web page.

`<audio>` represents sound content.

`<video>` represents video content.

`<img>` represents an image.

`<area>` represents a clickable area inside an image map.

`<map>` represents an image map.

## Conclusion

Semantic HTML is should be kept at the forefront of your mind when building a website, there are many more semantic HTML elements not listed in this article but these are enough to get you started and reduce the amount of `<div>` and `<span>` elements in your website.

Stay safe and thanks for reading.
