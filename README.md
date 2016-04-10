# What is this?

2016frontend is an example project built from a typical modern web frontend stack as of 2016.  There are dozens of possible technology choices at each level of the stack, but the ones I've selected here are perhaps the most common.

## Audience

This project was created for two groups of people: people who've always wanted to play with these newfangled React or TypeScript things, and people who don't work on the web but are curious what it's like.

It's also for people like me, who roughly know what we want, but can never remember all the myriad configuration settings for webpack and TypeScript and gulp...  :)

If you live and breathe web frontend, then there won't be anything new here for you.  I'm sure you have opinions about something I did wrong, so feel free to comment.  :)

## TypeScript or Babel?

The two obvious choices for language are ES6 (via Babel) or TypeScript.  Since
TypeScript is basically just ES6 with optional type annotations, I went with
TypeScript.

Of course, TypeScript wouldn't be very fun if we didn't get all the ES6 standard
library goodies too.  For that, babel-polyfill is imported.

## React

React seems to have won the keep-the-DOM-in-sync battle.  Plus, JSX is darn
convenient.

## Redux

In my experience, there is no strictly best option for managing client-side state.  I've got extensive experience with Backbone-style MVC/MVP/MVVP architectures and more recent experience with Flux at scale.  Both can get you into trouble in different ways.  Individual mutable models give granular change notifications, but require careful attention to state transitions.  (And I have no clue why everyone always talks about circular event loops.  I've literally never run into that.  I wish I knew why others have.)  At the other extreme, due to Flux's lack of
granular [incrementalization](https://blogs.janestreet.com/incrementality-and-the-web/), you must be careful to avoid performance issues at scale.  Also, Flux does not
have an answer for knowing when to discard some local data.  Relay seems wonderful, but it depends on GraphQL and, at least as of a few months ago, didn't have a story for
server-side data invalidation.

That said, Flux can be made to work, and it _is_ simple, so it wouldn't be a bad choice.  Redux is close enough to Flux it's better in some ways, so this template uses Redux instead.  Either way, you'll want to think long and hard about how your application represents, accesses, and synchronizes state.

## SASS

SASS won.  Autoprefixer means you don't have to think about any vendor prefixes.

## Webpack

Webpack is not my favorite build tool.  The configuration syntax is a bit
noncomposable, the watcher is slow (and unreliable?), and I regularly find bugs in
plugins.

That said, it supports a ton of stuff right out of the box, and webpack-dev-loader is great.  ts-loader works pretty well.

Why is the CSS compilation in Gulp, you ask?  You can use Webpack to compile CSS too, but Webpack doesn't
make use of multiple cores, and doesn't output anything until everything is built.  (Even SCons and Make get this right.)
Since CSS compilation is so fast, I find it nice to have it isolated from the Webpack build.  YMMV.

# Project Setup

OK!  Let's give this a go.

First, git clone the repo and then cd into 2016frontend.

We need to install both the npm dependencies and the TypeScript bindings.  Technically, tsd is deprecated but I couldn't get its replacement, typings, to work.  Pull requests welcome.

```
npm install
node_modules/.bin/tsd install
```

# Running

Launching the local development server is as simple as:

`npm start`

Then load http://localhost:8080/ in your browser.

Now make changes to your source files and reload the page at will!

Play around with tweaking the CSS.  If you've never used React or JSX, try modifying
the components or adding new ones.  If you want to learn Redux, try making the store
a lot more sophisticated.

# Editor

Atom with the atom-typescript plugin works really well.  I've heard people have
good luck with Visual Studio Code too.

# TODO

This project does not yet have a unit test framework integrated.  Jasmine
is okay, and seems to be what people reach for first, but it's not my favorite.  My ideal unit test framework is [imvujstest](https://github.com/imvu/imvujs/tree/master/src/imvujstest).  Someone should decouple it from the imvujs project.  :)

There is no production build or deployment story yet.  Basically, just add some options to webpack.config.js and enable a minification plugin.

The design and styling of the demo app are not as pretty as the TodoMVC examples out there.

If you have questions about any of these, reach out!  I'm happy to assist.
