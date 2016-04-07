# What is this?

As of 2016, this is a typical modern frontend web development stack.  There are
many choices, but these are fairly standard ones.  That said, I'll include some
justification.

## TypeScript

The two obvious choices for language are ES6 (via Babel) or TypeScript.  Since
TypeScript is basically just ES6 with optional type annotations, I went with
TypeScript.

Of course, TypeScript wouldn't be very fun if we didn't get all the ES6 standard
library goodies too.  For that, babel-polyfill is imported.

## React

React seems to have won the keep-the-DOM-in-sync battle.  Plus, JSX is darn
convenient.

## Redux

In my experience, there is no single option for managing client-side data that
will get you all the way to the end.  Backbone, or any system with individual
mutable models, can result in state bugs and confusion.  Flux's lack of
incrementalization has serious performance issues at scale, and Flux does not
have an answer for knowing when to discard some local data.  Relay depends on
GraphQL and, at least as of a few months ago, didn't have a story for
server-side data invalidation.

That said, Redux is a pretty good option, so this template uses that.  You'll
want to think long and hard about how your application represents, accesses, and
synchronizes state, however.

## SASS

SASS won.

## Webpack

Webpack is not my favorite tool.  The configuration syntax is a bit
noncomposable, the watcher is a little slow, and some of the plugins are not
always reliable.

That said, it supports a ton of stuff right out of the box.

And, for the record, I've generally preferred ts-loader, but recent bugs in
ts-loader have led me to using awesome-typescript-loader.

# Project Setup

```
npm install
node_modules/.bin/tsd install
```

# Running

`npm start`

Then load http://localhost:8080/ in your browser.

Now make changes to your source files and reload the page at will!

# Editor

Atom with the atom-typescript plugin works really well.  I've heard people have
good luck with Visual Studio Code too.
