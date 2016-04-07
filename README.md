# What is this?

As of 2016, this is a typical modern frontend web development stack.  There are
many choices, but these are fairly standard ones.  That said, I'll include some
justification.

## TypeScript

The two obvious choices for language are ES6 (via Babel) or TypeScript.  Since
TypeScript is basically just ES6 with optional type annotations, I went with
TypeScript.

## React

React seems to have won the keep-the-DOM-in-sync battle.

## SASS

Seems to have won over LESS.

## Webpack

Webpack is not my favorite tool.  The configuration syntax is a bit
noncomposable, the watcher is a little slow, and some of the plugins are not
always reliable.

That said, it supports a ton of stuff right out of the box.

And, for the record, I've generally preferred ts-loader, but recent bugs in
ts-loader have led me to using awesome-typescript-loader.

# Preparing

`npm install`

# Development

## Editor

Atom with the ts-language plugin works really well.  I've heard people have good
luck with Visual Studio Code too.

`npm start`
