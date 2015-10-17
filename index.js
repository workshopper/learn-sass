#!/usr/bin/env babel-node

import workshopper from 'workshopper-adventure'
import path        from 'path'

workshopper({
    name        : 'learn-sass'
  , title       : 'Learn SASS'
  , exerciseDir : path.join(__dirname, 'exercises')
  , appDir      : __dirname
  , languages   : ['en', 'es', 'it']
})
