# Modern Web Dev Build

## About
ModernWebDevBuild is a project aiming to provide a modern build for Web development.

The goal is to abstract as much of the build process as possible so that Web development projects can reuse this package to quickly get started without having to dive too deep in the boring details of how to setup a proper build that takes care of transpiling, minifying, optimizing images and whatnot.

This project is very opiniated and the goal is not to provide many options for many different needs. Rather, technology choices are embedded and either those are ok for or you're free to use something else that better fits your needs... :)

The provided build tasks are based on [Gulp](http://gulpjs.com/).

The idea for this project emerged as I was rediscovering the state of the art for Web development and the fact that tooling is now so much more complex than it was in the past (I would argue that it is way too complex nowadays and that isn't good for the accessibility of the platform itself).

This project will be available as an NPM package (and maybe on some other systems if there is a real need for that).

## Status & roadmap
Check out the current [TODO list](TODO.md)

## Features
* TypeScript > ES6 > ES5 transpilation w/ sourcemaps
* SASS > CSS transformation w/ sourcemaps
* production build creation with minification & bundling
* ...

## Usage
In order to use this package in your projects, you first need to add the dependency in your project's package.json file (I'll assume you know how to do this).

Once the dependency is installed, edit the gulpfile of your project and add the following code:
```
var gulp = require('gulp');
...
require('modern-web-dev-build');
```

You can run the `gulp -T` command to see the list of available tasks. Check the commands section below for more details about the available tasks.

## Commands
* ...

## Building from source
If you want to build from source, you need to:
* install NodeJS
* clone this git repository
* go to the folder where you've cloned the project
* ...

## Build dependencies
* ...

## Runtime dependencies
* ...

## Project configuration files
The project includes multiple configuration files. Here's some information about these:
* ...

## Building from sources
* clone the project
* ...

## Contributing
* Fork the project
* Create a feature branch in your fork
* Commit your changes & push to GitHub
* create a pull request :)

## Authors
### Sebastien Dubois
* [@Blog](http://www.dsebastien.net)
* [@Twitter](http://twitter.com/dSebastien)
* [@GitHub](http://github.com/dSebastien)

## License
This project and all associated source code is licensed under the terms of the [MIT License](http://en.wikipedia.org/wiki/MIT_License).
