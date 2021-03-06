# INT CSS

## Table of Contents

##### This Document:
+ [About](#about)
+ [Getting started](#getting-started)
+ [Building for development](#building-for-dev)
+ [Contributing](#contributing)

##### Further reading:
+ [File structure](./docs/FILE_STRUCTURE.md)
+ [Coding conventions](./docs/CODING_CONVENTIONS.md)
+ [Components and utilities](./docs/COMPONENTS_AND_UTILITIES.md)
+ [Using INT in a project](./docs/PROJECT_SETUP.md)


## About<a name='about'></a>

The **IN**verted **T**riangle CSS framework is a hand-built SCSS boilerplate for building high quality, scalable and lean web interfaces. It's inspired by and builds upon ideas and methodologies found in other successful CSS frameworks like [suitcss](http://suitcss.github.io/), [inuitcss](https://github.com/inuitcss/getting-started), [itcss](https://github.com/gpmd/itcss-boilerplate) and [foundation](https://github.com/zurb/foundation-sites).

It is designed for component-based approaches to UI development with a collection of CSS packages and build tools available as modules.

The ‘inverted triangle’ aspect of INT comes from the order in which the SCSS files are loaded and consequently collated. The premise being that *styles are layered up in order of specificity* starting with the least specific.

For further information see: [FILE_STRUCTURE.md](./docs/FILE_STRUCTURE.md)


## Getting Started<a name='getting-started'></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Prerequisites

To build the INT framework for development, you're required to have a recent version of Node.js installed. You can check what version you're using with node -v and you can use NVM to change to the correct version if you need to.

```bash
# example
node -v
nvm use 10
```


### Installing

**Important:** When developing or contributing to the INT framework, make sure you are on the `develop` branch. If you have been tasked with creating a specific feature, use the branch structre `feature/<feature-name>`.

To install all the dependencies, make sure you've pulled the latest code and then run the following:

```
npm install
```


## Building for development<a name='building-for-dev'></a>

It is important to note that the following instructions are for developing the INT framework, _not_ for integrating it into your project. For more information see [using INT in a project](./docs/PROJECT_SETUP.md).

To build the demo and watch the static files for changes run the following:

```
npm run watch
```

And in a new terminal window, to serve the static files run:

```
npm run demo
```

## Built With

+ [NPM](https://docs.npmjs.com/getting-started/what-is-npm) - Node package manager
+ [Chokidar CLI](https://github.com/kimmobrunfeldt/chokidar-cli#readme) - Watch file system changes.when watching files.
+ [Postcss CLI](https://github.com/postcss/postcss-cli#readme) - CLI for postcss
+ [Autoprefixer](https://github.com/postcss/autoprefixer) - Parse CSS and add vendor prefixes
+ [Static Server](https://github.com/nbluis/static-server#readme) - Serve static files from a local directory


## Authors

**James Bosworth** - [jsbosworth@gmail.com](mailto:jsbosworth@gmail.com?subject=INT+CSS)
