# jlaquinte-infinite-scroller

> infinite scroller web app

## Usage

Infinitely scrolling web application! Open this application on a phone and scroll to your hearts desire through an endless list of messages. Swipe right on a message to clear it from a list. This application should be run ina mobile browser.

[Live Demo](https://goo.gl/3XNfYE)

## Methodology
I went into this project with the words 'light' and 'extensible' in mind. For this reason I chose to build this application in VueJS. This is actually my first time using Vue. I heard that it had a much lighter foot print than framworks like React, and I wanted a solution that could let me bind elements and attributes to the DOM without a lot of code bloat. For my bundling and preprocessing I used Webpack because of its dependancy graphs.

After looking into Vue, I decided on a simpler project structure where I could place all most of the functionality as components and nest certain components within each other. Using this method I was able to quickly put together this project with efficient data binding, a callback, and not much code.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Run specs on my machine
``` bash
Node v9.2.0
npm v5.6.0
Webpack v3.12.0
```

### Installing

``` bash

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Build Setup



For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
