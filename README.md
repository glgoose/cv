# Resume

This repo serves 2 main purposes:

* function as a breakable toy to learn 11ty (SSG), nunjucks, SCSS
* version control of my resume

## Features

* Data save using [JSON Resume schema](https://jsonresume.org/schema/)
* [h-resume](http://microformats.org/wiki/h-resume) Microformat
* Accessible (WCAG AA)
* Search Engine Optimized (meta, JSON-LD, etc...)
* Self-Contained (no external resources)
* Print Styles

## Getting Started

To install the necessary packages, run this command in the root folder of the site:

```bash
npm install
```

__Commands__  

* Run `npm start` for a development server and live reloading
* Run `npm run build` to generate a production build
* Run `node pdfpup` to generate a PDF of the resume

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/glgoose/resume)

## Further Development

* Job Story: When I add something to my resume I want to be able to make entries in Dutch and English so that I can generate a resume in either language.
* Job Story: When someone goes the online version i.e. website I want them to be able to switch between the English and Dutch version of the resume so that it's accessible for more people.

## Credits

Structure based on [maxboeck/resume](https://github.com/maxboeck/resume)
