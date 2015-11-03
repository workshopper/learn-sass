# PARENT SELECTOR

Sometimes it’s useful to use a nested rule’s parent selector in other ways than the default. For instance, you might want to have special styles for when that selector is hovered over or for when the body element has a certain class. In these cases, you can explicitly specify where the parent selector should be inserted using the `&` character.

`&` will be replaced with the parent selector as it appears in the CSS. This means that if you have a deeply nested rule, the parent selector will be fully resolved before the `&` is replaced. For example:

```scss
#main {
  color: black;
  a {
    font-weight: bold;
    &:hover { color: red; }
  }
}
```

is compiled to:

```css
#main {
  color: black; }
  #main a {
    font-weight: bold; }
    #main a:hover {
      color: red; }
```

# EXERCISE

Write a rule for the `button` element setting its `color` to 'black', and use the parent selector `&` to set its `color` to 'red' when the element has focus, via pseudo selector `:focus`.

--
## SUGGERIMENTI

Per creare un foglio di stile Sass (SCSS), crea un nuovo file con l'estensione `.scss` e comincia a scrivere in SCSS. Quando hai terminato, devi eseguire:

```sh
$ {appname} verify stylesheet.scss
```

per proseguire. Il tuo foglio di stile sarà verificato, un rapporto generato, e la lezione marcata come 'completa' se hai completato l'esercizio con successo.
