# CICLO WHILE

La direttiva `@while` prende una espressione SassScript e produce ripetutamente gli stili in essa annidati finché l'espressione viene valutato come falso. Ciò può essere usato per ottenere un comportamento di ripetizione più complesso di ciò di cui è capace la direttiva `@for`, sebbene ciò sia raramente necessario. Ad esempio:

```scss
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}
```

viene compilato come:

```css
.item-6 {
  width: 12em; }

.item-4 {
  width: 8em; }

.item-2 {
  width: 4em; }
```

# ESERCIZIO

Scrivi delle regole per gli elementi da `h1` ad `h6` che impostino la proprietà `font-size` al valore `24px` meno `3px` moltiplicato il livello dell'intestazione, cioè in modo che `h1` abbia un valore di `font-size` di `24px - 3px * 1` uguale a `21px`, usando la direttiva `@while`. Confrontalo con il codice dell'esercizio precedente.

--
## SUGGERIMENTI

Per creare un foglio di stile Sass (SCSS), crea un nuovo file con l'estensione `.scss` e comincia a scrivere in SCSS. Quando hai terminato, devi eseguire:

```sh
$ {appname} verify stylesheet.scss
```

per proseguire. Il tuo foglio di stile sarà verificato, un rapporto generato, e la lezione marcata come 'completa' se hai completato l'esercizio con successo.
