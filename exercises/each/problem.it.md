# ITERATORE EACH

La direttiva `@each` appare solitamente nella forma `@each $var in <lista o mappa>`. `$var` può essere un qualunque nome di variabile, come `$length` o `$name`, e `<lista o mappa>` è un'espressione SassScript che restituisce una lista o una mappa.

La regola `@each` imposta il valore di `$var` a ciascun elemento nella lista o mappa, e quindi produce gli stili che contiene usando tale valore di `$var`. Ad esempio:

```scss
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
```

viene compilato come:

```css
.puma-icon {
  background-image: url('/images/puma.png'); }
.sea-slug-icon {
  background-image: url('/images/sea-slug.png'); }
.egret-icon {
  background-image: url('/images/egret.png'); }
.salamander-icon {
  background-image: url('/images/salamander.png'); }
```

# ESERCIZIO

Scrivi uno script Sass che genera regole per i selettori `.#{$big-cat}-picture`, dove `$big-cat` è uno tra 'cheetah', 'puma', 'jaguar', 'panther', 'tiger', 'leopard', e imposta il loro `padding` al valore '3em'.

--
## SUGGERIMENTI

Per creare un foglio di stile Sass (SCSS), crea un nuovo file con l'estensione `.scss` e comincia a scrivere in SCSS. Quando hai terminato, devi eseguire:

```sh
$ {appname} verify stylesheet.scss
```

per proseguire. Il tuo foglio di stile sarà verificato, un rapporto generato, e la lezione marcata come 'completa' se hai completato l'esercizio con successo.
