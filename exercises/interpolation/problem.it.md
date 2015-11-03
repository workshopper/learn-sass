# INTERPOLATION

You can also use SassScript variables in selectors and property names using `#{}` interpolation syntax:

```scss
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}
```

is compiled to:

```css
p.foo {
  border-color: blue; }
```

It’s also possible to use `#{}` to put SassScript into property values. In most cases this isn’t any better than using a variable, but using `#{}` does mean that any operations near it will be treated as plain CSS. For example:

```scss
p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}
```

is compiled to:

```css
p {
  font: 12px/30px; }
```

# EXERCISE

Define a variable `$selector` and set its value to 'article'. Then write a rule using the interpolated value of the `$selector` variable as selector, and set its `color` to `#f00`.

--
## SUGGERIMENTI

Per creare un foglio di stile Sass (SCSS), crea un nuovo file con l'estensione `.scss` e comincia a scrivere in SCSS. Quando hai terminato, devi eseguire:

```sh
$ {appname} verify stylesheet.scss
```

per proseguire. Il tuo foglio di stile sarà verificato, un rapporto generato, e la lezione marcata come 'completa' se hai completato l'esercizio con successo.
