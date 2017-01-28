# Localization HOWTO

In computing, localization is the process of adapting software to different languages, regional differences, cultural preferences, and technical requirements of a target audience.

This guide explains how to contribute a new localization to this workshopper. If you are an international user and would like to bring Nodeschool workshops to a broader audience, please consider contributing a localization! It is simple, fun, and enables more people to learn and practice.

## Add the language option

In the `index.js` file, the workshopper is instantiated with a list of supported translations. In order to add a new language, add its code to the array:

```js
const workshopper = require('workshopper-adventure')
    , path = require('path')
    , learnsass = workshopper({
        title       : 'Learn SASS'
      , appDir      : __dirname
      , languages   : ['en', 'it', 'pt-br']
      , footer      : {
        file: path.join(__dirname, 'footer.{lang}.md')
      }
    })
```

If you want to add a new language, e.g. Spanish, add an entry `'es'` to the array:

```js
      , languages   : ['en', 'es', 'it', 'pt-br']
```

## Menu

The menu of the workshopper greets the user with a list of problem names. The strings for these names are contained in the JSON file `i18n/en.json`. Translations of problem names should be placed in a JSON file inside the same `i18n` folder, named after the language code, e.g. `es.json`. Duplicate the `en.json` file to `es.json` and translate its contents.

## Footer

Workshoppers usually display a footer beneath the problem description, providing the user with help or additional information to make their way through. The footer is a [Markdown](https://en.wikipedia.org/wiki/Markdown) file located at top level named `footer.xx.md`, where `xx` is the language code, e.g. `footer.it.md`.

In order to add a localized footer for Spanish, create a `footer.es.md` file at top level, containing the translation of the English file `footer.en.md`.

## Problems and solutions

The text of each problem and the message printed when the user solves it can be localized by adding [Markdown](https://en.wikipedia.org/wiki/Markdown) files with a well defined name inside the problem directory, which is a subdirectory of the `exercises` directory. Consider this structure:

```
+-- exercises
|   +-- problem-1
|   |   +-- solution
|   |   |   `-- solution.scss
|   |   +-- solution_it
|   |   |   `-- solution.scss
|   |   +-- solution_pt-br
|   |   |   `-- solution.scss
|   |   +-- exercise.js
|   |   +-- problem.md
|   |   +-- problem.it.md
|   |   `-- problem_pt-br.md
|   +-- problem-2
|   |   +-- solution
|   |   |   `-- solution.scss
|   |   +-- solution_it
|   |   |   `-- solution.scss
|   |   +-- solution_pt-br
|   |   |   `-- solution.scss
|   |   +-- exercise.js
|   |   +-- problem.md
|   |   +-- problem.it.md
|   |   `-- problem_pt-br.md
:   :
```

As you can see, translation file names are in the format `problem.xx.md` and `solution_xx/solution.scss` where the `xx` suffix is the language code.

In order to add the Spanish localization, we must add new `problem.es.md` and `solution_es/solution.scss` files inside each problem directory as follows:

```
+-- problems
|   +-- problem-1
|   |   +-- solution
|   |   |   `-- solution.scss
|   |   +-- solution_es
|   |   |   `-- solution.scss
|   |   +-- solution_it
|   |   |   `-- solution.scss
|   |   +-- solution_pt-br
|   |   |   `-- solution.scss
|   |   +-- exercise.js
|   |   +-- problem.md
|   |   +-- problem.es.md
|   |   +-- problem.it.md
|   |   `-- problem_pt-br.md
|   +-- problem-2
|   |   +-- solution
|   |   |   `-- solution.scss
|   |   +-- solution_es
|   |   |   `-- solution.scss
|   |   +-- solution_it
|   |   |   `-- solution.scss
|   |   +-- solution_pt-br
|   |   |   `-- solution.scss
|   |   +-- exercise.js
|   |   +-- problem.md
|   |   +-- problem.es.md
|   |   +-- problem.it.md
|   |   `-- problem_pt-br.md
:   :
```

This is probably the most complex and time consuming task of localizing a workshopper, as problems often interleave paragraphs of text, code snippets and suggestions.

Please remember to use welcoming and inclusive language. The [Contributor Covenant](http://contributor-covenant.org/) offers guidelines if you're unsure.

## Testing

In order to test a translation, launch the workshopper and choose the desired language selecting the menu option `CHOOSE LANGUAGE`. If you don't see the language you contributed listed in the options, chances are you didn't save your updates to the list of languages in the `index.js`.

Once you're satisfied with the results, commit your changes and push to your repo, then submit a PR to the main workshopper repo!
