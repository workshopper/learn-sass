# OPERATORS

Doing math in your CSS is very helpful. Sass has a handful of standard math operators like `+`, `-`, `*`, `/,` and `%`. In our example we're going to do some simple math to calculate widths for an `aside` & `article`.

```scss
.container { width: 100%; }

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complimentary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```

We've created a very simple fluid grid, based on 960px. Operations in Sass let us do something like take pixel values and convert them to percentages without much hassle. The generated CSS will look like:

```css
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 62.5%;
}

aside[role="complimentary"] {
  float: right;
  width: 31.25%;
}
```

# EXERCISE

Define a variable `$page-width` with a value of `1400px`, and a variable `$padding` with a value of `20px`. Then, define a rule for a selector `.container`, set its `padding` to the value of `$padding`, and its `width` to `0.8` times the value of `$page-width`, minus twice the value of `$padding`.

--
## SUGGERIMENTI

Per creare un foglio di stile Sass (SCSS), crea un nuovo file con l'estensione `.scss` e comincia a scrivere in SCSS. Quando hai terminato, devi eseguire:

```sh
$ {appname} verify stylesheet.scss
```

per proseguire. Il tuo foglio di stile sarà verificato, un rapporto generato, e la lezione marcata come 'completa' se hai completato l'esercizio con successo.
