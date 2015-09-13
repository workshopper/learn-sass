var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  // , execute       = require('workshopper-exercise/execute')
  // Override the default executor
  , execute       = require('../../execute')
  , comparestdout = require('workshopper-exercise/comparestdout')


// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)


module.exports = exercise
