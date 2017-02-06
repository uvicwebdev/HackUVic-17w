# HackUVic Website

[![Travis](https://img.shields.io/travis/uvicwebdev/HackUVic.svg)](https://travis-ci.org/uvicwebdev/HackUVic)
[![Website](https://img.shields.io/website-up-down-green-red/http/hackuvic.com.svg)](http://hackuvic.com/)

The website for HackUVic.

## Getting Started

The website is built with React and deploys to GitHub pages using Travis CI.

### Setup

Clone the repo and

```
npm install
npm start
```

you should now be running the live development server.

### Making changes

A bunch of the configuration information for the website is stored in `config.json` and the rest is in the respective componants.

* `componants/` contains all the jsx/html that makes up the website
* `styles/` contains all the styling in as [less](http://lesscss.org/) we're using a framework called [Spectre](https://picturepan2.github.io/spectre/#elements) with some modifications so you can check out the available styles there
* `font/` contains a spec and icons for a dynamically generated icon font. `font/icons/` has a bunch of icons from [Typicons](http://www.typicons.com/) which need to be included in `font/hackicon.font.js` to be used on the site
* `img/` and `docs/` both contain assets for the site

### Building

If you're running with `npm start` then webpack will automatically build the site into the `dist/` folder and watch for changes.

If you want to make a production build (minified, no source maps etc.) you can run `npm run build`.

### Deploying changes

Please talk to Brynn before deploying changes.

## Credits

* Built off the [Single Page Apps for GitHub Pages](https://github.com/rafrex/spa-github-pages) template by Rafael Pedicini.
