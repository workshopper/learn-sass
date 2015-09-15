# FOR LOOP

The `@for` directive repeatedly outputs a set of styles. For each repetition, a counter variable is used to adjust the output. The directive has two forms: `@for $var from <start> through <end>` and `@for $var from <start> to <end>`. Note the difference in the keywords `through` and `to`. `$var` can be any variable name, like `$i`; `<start>` and `<end>` are SassScript expressions that should return integers. When `<start>` is greater than `<end>` the counter will decrement instead of increment.

The `@for` statement sets $var to each successive number in the specified range and each time outputs the nested styles using that value of `$var`. For the form `from ... through`, the range _includes_ the values of `<start>` and `<end>,` but the form `from ... to` runs up to _but not including_ the value of `<end>`. Using the `through` syntax,

```scss
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}
```

is compiled to:

```css
.item-1 {
  width: 2em; }
.item-2 {
  width: 4em; }
.item-3 {
  width: 6em; }
```

# EXERCISE

Write rules for the elements `h1` through `h6` that set their `font-size` to be `24px` minus `3px` times the heading level, i.e. `h1` would have a `font-size` of `24px - 3px * 1` equal to `21px`.

--
## HINTS

To make a Sass (SCSS) stylesheet, create a new file with a `.scss` extension and start writing SCSS. When you are done, you must run:

```sh
$ {appname} verify stylesheet.scss
```

to proceed. Your stylesheet will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.
