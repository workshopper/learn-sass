# WHILE LOOP

The `@while` directive takes a SassScript expression and repeatedly outputs the nested styles until the statement evaluates to false. This can be used to achieve more complex looping than the `@for` statement is capable of, although this is rarely necessary. For example:

```scss
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}
```

is compiled to:

```css
.item-6 {
  width: 12em; }

.item-4 {
  width: 8em; }

.item-2 {
  width: 4em; }
```

# EXERCISE

Write rules for the elements `h1` through `h6` that set their `font-size` to be `24px` minus `3px` times the heading level, i.e. `h1` would have a `font-size` of `24px - 3px * 1` equal to `21px`, using the `@while` directive. Compare with the code of the previous exercise.

--
## HINTS

To make a Sass (SCSS) stylesheet, create a new file with a `.scss` extension and start writing SCSS. When you are done, you must run:

```sh
$ {appname} verify stylesheet.scss
```

to proceed. Your stylesheet will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.
