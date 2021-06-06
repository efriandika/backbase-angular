# Backbase Assigment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.2
and also available on [Live Demo](https://efriandika.github.io/backbase-angular/) that I hosted on my GitHub Pages

## GIT Repo

* [Angular Version](https://github.com/efriandika/backbase-angular/)
* [React Version](https://github.com/efriandika/backbase-react/)

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Architecture

I call this architecture that I use in this project as `Component centric` architecture. What are the advantages?
* It is loosely coupled and reusable.
* Scalable.
* It uses lazy load when opening a page. So that, you only load the file you need on that page to reduce load time on the client side.
* Implement single responsibility principe

All of these are very useful especially when building react app that is always getting larger. It will help us to maintain thousands components easier.


## Directory Structure

```
project
│   .editorconfig (to make sure we are using same style on every IDE)
│   .gitignore
│   angular.json
│   README.md
│   ...
│   
└───src
│   └─── app
│        └─── ... (Another lazyload module / feature component)
│        └─── core (Core functionaity, should be loaded once)
│        └─── shared (Shareable component, service, pipes, etc..)
│        └─── store (Global state management)
│        └─── tests (Testing utility) 
│        └─── ... (Another lazyload module / feature component)
│   └─── assets (Asstes files: global images, etc...)
│   └─── environments (Global SCSS File)
│   └─── resources 
│   │    apple-touch-icon.png
│   │    favicon-32x32.png
│   │    index.html
│   │    main.ts
│   │    polyfills.ts
│   │    test.ts
```

## How to Run?

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Since I use free service of **openweathermap.org**, it has rate limit = 60 request / minutes.
If you would like to change the api key, it can be configured at `src/environments/environment.ts` file:
```
backendBaseURL="https://api.openweathermap.org/data/2.5"
backendBaseApiKey="d91fa5e792320c4bd3a18bb475e1c7ea"
```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Author

* [Efriandika Pratama](https://www.linkedin.com/in/efriandika/)
