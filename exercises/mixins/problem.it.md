# MIXINS

Some things in CSS are a bit tedious to write, especially with CSS3 and the many vendor prefixes that exist. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. You can even pass in values to make your mixin more flexible. A good use of a mixin is for vendor prefixes. Here's an example for border-radius.

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```

To create a mixin you use the `@mixin` directive and give it a name. We've named our mixin `border-radius`. We're also using the variable `$radius` inside the parentheses so we can pass in a radius of whatever we want. After you create your mixin, you can then use it as a CSS declaration starting with `@include` followed by the name of the mixin. When your CSS is generated it'll look like this:

```css
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

# EXERCISE

Write a mixin `border` that accepts a variable `$thickness` and sets the `border-width` style to the value of `$thickness`. Then, include the mixin in a rule for the `img` element, and set its border thickness to `10px`.

--
## SUGGERIMENTI

Per creare un foglio di stile Sass (SCSS), crea un nuovo file con l'estensione `.scss` e comincia a scrivere in SCSS. Quando hai terminato, devi eseguire:

```sh
$ {appname} verify stylesheet.scss
```

per proseguire. Il tuo foglio di stile sarà verificato, un rapporto generato, e la lezione marcata come 'completa' se hai completato l'esercizio con successo.
