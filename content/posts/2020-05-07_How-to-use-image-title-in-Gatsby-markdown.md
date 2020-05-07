---
path: "/How-to-use-image-title-in-Gatsby-markdown"
date: 2020-05-07
title: "How to use image title in Gatsby Markdown"
subtitle: "With gatsby-remark-images plugin"
tags: "Gatsby"
readtime: 5
template: blogpost
---

## Initialize

First of all, you should add the `showCaptions` property to your `gatsby-remark-images` plugin, as it mentioned in [docs](https://www.gatsbyjs.org/packages/gatsby-remark-images/#options):

```jsx{10,11}
{
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1440,
              linkImagesToOriginal: true,
              showCaptions: ['title'],
              markdownCaptions: true
            },
          },
        ],
      },
},
```

As a key's value you should pass an array that represents which image attribute should be used as a caption. Attributes are taken by the order that is set in this array. 

If you pass `['title', 'alt']` then Gatsby plugin will look for the `title` first and if there is no such attribute it will search for an `alt` tag.

If you want images only with a `title` tag to have caption text under it you should pass an `['title']` array.

By passing `markdownCaptions: true` property to plugin's options you are telling it to parse caption text as a markdown instead of raw text.

## Usage

You are ready to go now. Just pass the title text in double quotes as a second argument to markdown image element:

`![image-alt](image-url "(markdown) title")`

For example:

```python
![closed](../images/posts/1/ross-stone-G6dbyxMR9pA-unsplash.jpg "Photo by [Ross Stone](https://unsplash.com/@rs2photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/closed-road?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)")
```

As a result you'll get something like this:

![closed](../images/posts/1/ross-stone-G6dbyxMR9pA-unsplash.jpg "Photo by [Ross Stone](https://unsplash.com/@rs2photography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/closed-road?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)")

## Possible pitfalls

If you have an error like this:

```bash
UNHANDLED REJECTION Cannot read property 'contentDigest' of undefined



  TypeError: Cannot read property 'contentDigest' of undefined

  - extend-node-type.js:57 htmlCacheKey
    [test]/[gatsby-transformer-remark]/extend-node-type.js:57:80

  - extend-node-type.js:337 Object.getHTML [as generateHTML]
    [test]/[gatsby-transformer-remark]/extend-node-type.js:337:42

  - index.js:150 getImageCaption
    [test]/[gatsby-remark-images]/index.js:150:21

  - index.js:306 _callee$
    [test]/[gatsby-remark-images]/index.js:306:54
```

you should update your Gatsby plugins:

```bash
npm up gatsby-transformer-remark gatsby-remark-images
npm audit fix
```

This is a [bug](https://github.com/gatsbyjs/gatsby/issues/16703) and it was fixed around november-december 2019.

## Styling 💅

By default, Gatsby image title has no proper CSS styling.

In order to make your title centered and smaller in size you can add to your CSS styles this properties:

```	scss
.gatsby-resp-image-figcaption {
    font-size: $base-font-size*0.6; // $base-font-size - font size SCSS variable
    text-align: center;
}
```

And if your images with title have borders in front of them, this properties can fix it:

```scss
figure {
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
```
