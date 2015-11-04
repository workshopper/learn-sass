# INTERPOLAZIONE

Puoi utilizzare variabili SassScript anche in selettori e nomi di proprietà usando la sintassi di interpolazione `#{}`:

```scss
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}
```

viene compilato come:

```css
p.foo {
  border-color: blue; }
```

È inoltre possibile usare `#{}` per inserire SassScript nei valori delle proprietà. In molti casi questo non ha alcun vantaggio rispetto all'uso di variabili, ma l'uso di `#{}` garantisce che ciascuna operazione al suo intorno verrà lasciata inalterata come puro CSS. Ad esempio:

```scss
p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}
```

viene compilata come:

```css
p {
  font: 12px/30px; }
```

# ESERCIZIO

Definisci una variabile `$selector` e imposta il suo valore ad 'article'. Successivamente scrivi una regola usando il valore interpolato della variabile `$selector` come selettore, e imposta il suo stile `color` a `#f00`.

--
## SUGGERIMENTI

Per creare un foglio di stile Sass (SCSS), crea un nuovo file con l'estensione `.scss` e comincia a scrivere in SCSS. Quando hai terminato, devi eseguire:

```sh
$ {appname} verify stylesheet.scss
```

per proseguire. Il tuo foglio di stile sarà verificato, un rapporto generato, e la lezione marcata come 'completa' se hai completato l'esercizio con successo.
