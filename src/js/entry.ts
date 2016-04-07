// Must be imported first, as it polyfills a great deal of standard JavaScript
// stuff.
import 'babel-polyfill';

import main from 'main';

declare function require(m: string): any;

let React = require('react');

main();
