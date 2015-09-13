# VARIABLES

Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the `$` symbol to make something a variable. Here's an example:

```scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

When the Sass is processed, it takes the variables we define for the `$font-stack` and `$primary-color` and outputs normal CSS with our variable values placed in the CSS. This can be extremely powerful when working with brand colors and keeping them consistent throughout the site.

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

# EXERCISE

Write a stylesheet that defines a variable `$color`, sets its value to '#000', and uses it to set the `color` style of the `body` element.

--
## HINTS

To make a Sass (SCSS) stylesheet, create a new file with a `.scss` extension and start writing SCSS. When you are done, you must run:

```sh
$ {appname} verify stylesheet.scss
```

to proceed. Your stylesheet will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.
