# Contributing
Changes and improvements are more than welcome! Feel free to fork and open a pull request.

Please follow the house rules to have a bigger chance of your contribution being merged.

## House rules

### How to make changes
 - To make changes, create a new branch based on `master` (for the nature of this project, a `gh-pages` branch is not needed) and make them there, then create a pull request to master.
 - If you want to add an exercise, the easiest way is to duplicate one of the folders present in `exercises/`. The `problem.md` file contains the explanation of the feature covered by the exercise, and the text of the exercise; `solution.scss` is a Sass file that contains the proposed solution; finally, `exercise.js` is the program that validates that the user's submission produces the same result as the proposed solution. Unless you want to significantly alter the behavior of the exercise, you can safely stick to this structure. Additionally, you _must_ add the name of the exercise (which is the name of the folder) to the array in `menu.json`. It is a good idea to append it to the end.
 - To add a new translation, you _must_ add the new language code (use the appropriate [IETF language tag](https://en.wikipedia.org/wiki/IETF_language_tag)) to the `languages` array passed to `workshopper` in `index.js`; duplicate the `en.json` file under `i18n/` and rename it as the desired language code; finally, translate all the strings in the file: do not translate the keys, only the values.
 - To fix bugs with translations, edit the corresponding language file under `i18n/`.
 - Please test your modification thoroughly before submitting your Pull Request.
 - Please use a [gender neutral language](https://en.wikipedia.org/wiki/Gender-neutral_language) for your wording in order to keep this project inclusive.

### Changes that might not be accepted
Some modifications won't be merged, or will have to be evaluated carefully before being merged:

 - Deviation from the core workshop experience
 - Subtle variations to existing exercises
 - Problems whose solution won't fit in a couple of files maximum

### Changes that are welcome
 - Bug fixes
 - Compatibility improvements
 - New exercises
 - "Under the hood" enhancements
 - Small changes that don't have an impact on the core workshop experience
