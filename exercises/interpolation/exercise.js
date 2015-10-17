import exercise      from 'workshopper-exercise'
import filecheck     from 'workshopper-exercise/filecheck'
// Override the default executor
import execute       from '../../execute'
import comparestdout from 'workshopper-exercise/comparestdout'


// checks that the submission file actually exists
// executes the solution and submission in parallel with spawn()
// compares stdout of solution and submission
export default comparestdout(execute(filecheck(exercise())))
