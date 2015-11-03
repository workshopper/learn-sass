#!/usr/bin/env node


const workshopper = require('workshopper-adventure')
    , path        = require('path')

workshopper({
    name        : 'learn-sass'
  , title       : 'Learn SASS'
  , exerciseDir : path.join(__dirname, 'exercises')
  , appDir      : __dirname
  , languages   : ['en', 'it', 'pt-br']
})
