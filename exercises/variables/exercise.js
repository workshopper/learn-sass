var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')


// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)


module.exports = exercise

// TODO: write a utility that takes a .scss file in input, renders it to CSS,
// and compares its output with the rendered output of the solution file
var sass = require('node-sass');
var path = require('path');

var result = sass.renderSync({
  file: path.resolve(__dirname, './solution/solution.scss')
});
console.dir(result.css.toString());
