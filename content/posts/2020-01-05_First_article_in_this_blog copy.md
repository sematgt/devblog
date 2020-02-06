---
path: "/check-article"
date: 2020-01-05
title: "Check markdown and style it article"
subtitle: "Find out how to get a list of all the users present in a Postgres database, and their permissions"
tags: "Blog"
readtime: 12
template: blogpost
---

## Introduction

Hello. I'm **Simon**. I [learn]() how to code and write about it. This is my first article on english ever.
I love to make *different to-do lists* to plan my routine, education and work. Here is what I`m assuming to study in near future.

## To-do plan and the meaning of consectetur

Lorem ipsum dolor sit amet, `consectetur` adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea [commodo consequat](https://www.example.com). Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Python

ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

#### Python4

But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.

No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.

To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?

##### Python5 quote

>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.

Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.

###### Python6

- [x] Read "Learning Python" Mark Lutz
- [ ] Read "Programming Python" Mark Lutz
- [x] Django
- [x] Django REST Framework
- [x] Selenium

### Versioning

- Git 101
- Advanced Git
- Mercurial
- SVN

### OS, CLI

1. Bash
2. cmd.exe
3. PowerShell 101
4. Linux

### DevOps

A string of code:

``<Helmet title={`${config.siteTitle} - ${post.frontmatter.title}`} />``

### QA

A block of code:

``` jsx
import React from "react"
import config from "../../data/SiteConfig"
import Layout from '../components/layout'
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

export default function Template ({
  data,
}) {
  const { markdownRemark: post } = data
  return (
    <div className="blog-post-container">
    <Helmet title={`${config.siteTitle} - ${post.frontmatter.title}`} />
      <Layout sidebar="off">
        <div className="blog-post">
        <Link to="/">
          Main page <span role="img" aria-label="home">🏡</span>
        </Link>
          <h1>{post.frontmatter.title}</h1>
          <div className="post-info" data-tag={post.frontmatter.tags}>
          <small>{post.frontmatter.readtime} mins read on <span>
          {"{"}{post.frontmatter.tags}{"}"}
          </span>
          </small>
          </div>
          <div className="post-preview-subtitle">
            {post.frontmatter.subtitle}
          </div>
          <div 
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    </div>
  )
}
```

### DB

An image sir

![there must be an image](../images/bigimage.png)

### UI/UX Design

![there must be an image](../images/bigimage2.png)

### CSS

![logo](../images/logo.png)

### Networking

```html
<div class="col-sm-3 col-sm-offset-1 blog-sidebar">
  <div class="sidebar-module sidebar-module-inset">
    <h4>About</h4>
    <p>
      Etiam porta <em>sem malesuada magna</em> 
      mollis euismod. Cras mattis consectetur purus sit
      amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
    </p>
  </div>
  <div class="sidebar-module">
    <h4>Archives</h4>
    <ol class="list-unstyled">
      <li><a href="#">March 2014</a></li>
      <!-- More archive examples -->
    </ol>
  </div>
  <div class="sidebar-module">
    <h4>Elsewhere</h4>
    <ol class="list-unstyled">
      <li><a href="#">GitHub</a></li>
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Facebook</a></li>
    </ol>
  </div>
</div>
<!-- /.blog-sidebar -->
```

### JavaScript

| Title   | Description |
| ------- | ----- |
| Aragorn | Human |
| Gimli   | Dwarf       |
| Legolas | Elf   |

### Definition list

term
: definition

### Strikethrought

~~The world is flat.~~

### CLI

```bash
$ ls
bin/  etc/           LICENSE.txt  ReleaseNotes.html  unins000.exe*
cmd/  git-bash.exe*  mingw64/     tmp/               unins000.msg
dev/  git-cmd.exe*   proc/        unins000.dat       usr/
```

