# IMPORTS

CSS has an import option that lets you split your CSS into smaller, more maintainable portions. The only drawback is that each time you use `@import` in CSS it creates another HTTP request. Sass builds on top of the current CSS `@import` but instead of requiring an HTTP request, Sass will take the file that you want to import and combine it with the file you're importing into so you can serve a single CSS file to the web browser.

Let's say you have a couple of Sass files, \_reset.scss and base.scss. We want to import \_reset.scss into base.scss.

```scss
// _reset.scss

html,
body,
ul,
ol {
   margin: 0;
  padding: 0;
}
```

```scss
// base.scss

@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

Notice we're using `@import 'reset';` in the base.scss file. When you import a file you don't need to include the file extension .scss. Sass is smart and will figure it out for you. When you generate the CSS you'll get:

```css
html, body, ul, ol {
  margin: 0;
  padding: 0;
}

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

# EXERCISE

Write a partial that defines a variable `$color` and sets its value to '#ff0000', and a stylesheet that imports the partial, and uses the variable to set the `color` style of the body element.

--
## SUGGERIMENTI

Per creare un foglio di stile Sass (SCSS), crea un nuovo file con l'estensione `.scss` e comincia a scrivere in SCSS. Quando hai terminato, devi eseguire:

```sh
$ {appname} verify stylesheet.scss
```

per proseguire. Il tuo foglio di stile sarà verificato, un rapporto generato, e la lezione marcata come 'completa' se hai completato l'esercizio con successo.
