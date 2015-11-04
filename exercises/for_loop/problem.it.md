# CICLO FOR

La direttiva `@for` emette ripetutamente un insieme di stili. Per ogni ripetizione, viene usata una variabile contatore per modificare il risultato. La direttiva ha due forme: `@for $var from <start> through <end>` e `@for $var from <start> to <end>`. Nota la differenza nelle parole chiave `through` e `to`. `$var` può essere qualsiasi nome di variabile, come `$i`; `<start>` e `<end>` sono espressioni SassScript che devono restituire valori interi. Quando `<start>` è maggiore di `<end>` il contatore verrà decrementato anziché incrementato.

L'istruzione `@for` imposta il valore di `$var` a ciascun numero nella successione e produce ogni volta gli stili in essa contenuti usando tale valore di `$var`. Per la forma `from ... through`, la successione _include_ i valori di `<start>` e `<end>,` ma la forma `from ... to` giunge _ma non include_ il valore `<end>`. Usando la sintassi `through`,

```scss
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}
```

viene compilata come:

```css
.item-1 {
  width: 2em; }
.item-2 {
  width: 4em; }
.item-3 {
  width: 6em; }
```

# ESERCIZIO

Scrivi delle regole per gli elementi da `h1` ad `h6` che impostino la proprietà `font-size` al valore `24px` meno `3px` moltiplicato il livello dell'intestazione, cioè in modo che `h1` abbia un valore di `font-size` di `24px - 3px * 1` uguale a `21px`, usando la direttiva `@for`.

--
## SUGGERIMENTI

Per creare un foglio di stile Sass (SCSS), crea un nuovo file con l'estensione `.scss` e comincia a scrivere in SCSS. Quando hai terminato, devi eseguire:

```sh
$ {appname} verify stylesheet.scss
```

per proseguire. Il tuo foglio di stile sarà verificato, un rapporto generato, e la lezione marcata come 'completa' se hai completato l'esercizio con successo.
