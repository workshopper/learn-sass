# MIXIN CONTENT

Passing Content Blocks to a Mixin

It is possible to pass a block of styles to the mixin for placement within the styles included by the mixin. The styles will appear at the location of any `@content` directives found within the mixin. This makes it possible to define abstractions relating to the construction of selectors and directives.

For example:

```scss
@mixin apply-to-ie6-only {
  * html {
    @content;
  }
}
@include apply-to-ie6-only {
  #logo {
    background-image: url(/logo.gif);
  }
}
```

Generates:

```css
* html #logo {
  background-image: url(/logo.gif);
}
```

Note: when the `@content` directive is specified more than once or in a loop, the style block will be duplicated with each invocation.

# EXERCISE

Modify the `border-thickness` mixin from the previous exercise to also accept a `@content`, and invoke it by passing in a rule that sets the `border-style` of the `img` element to `solid`.

--
## SUGGERIMENTI

Per creare un foglio di stile Sass (SCSS), crea un nuovo file con l'estensione `.scss` e comincia a scrivere in SCSS. Quando hai terminato, devi eseguire:

```sh
$ {appname} verify stylesheet.scss
```

per proseguire. Il tuo foglio di stile sarà verificato, un rapporto generato, e la lezione marcata come 'completa' se hai completato l'esercizio con successo.
