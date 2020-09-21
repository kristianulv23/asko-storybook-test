# asko-storybook

## Clone project

```
ssh: git clone git@github.com:fortedigital/asko-storybook.git
https: git clone https://github.com/fortedigital/asko-storybook.git
```

## Project setup

```
1. cd asko-storybook

2. npm install
```

### Compiles and hot-reloads for development

```
npm run storybook (runs at localhost:6006)
```

### Builds a static web app which can be deployed to any static site hosting services.

```
npm run build-storybook
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```
### Create and publish new package

```
1. Run 'npm link' at project root asko-storybook/

2. Run 'create-package'

3. Apply PACKAGENAME and press enter.

This leads to the following folder structure 

 src/
    components/
        PACKAGENAME/
            PACKAGENAME.vue
            index.js
            package.json
            README.md
            style.js
    stories/
        PACKAGENAME.stories.js
tests/
    unit/
        PACKAGENAME.spec.js

4. Get your hands dirty by writing some awesome code

5. Commit and push changes to Github

6. Run 'lerna publish' and add desired version [major | minor | patch]

7. Run 'npm unlink' at project root asko-storybook/ when you're done creating new packages

```

### How to use published packages

* [Read Intro.stories.mdx on how to consume packages](https://github.com/fortedigital/asko-storybook/blob/master/src/Intro.stories.mdx)


### Requirements

* [node & npm](https://www.npmjs.com/get-npm)
* [lerna](https://lerna.js.org/)

### References / Documentation

* [npm link](https://docs.npmjs.com/cli/link)
* [About Storybook](https://storybook.js.org/)
* [About Lerna](https://lerna.js.org/)
* [Vue.js](https://vuejs.org/v2/guide/)
