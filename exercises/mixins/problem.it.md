# MIXIN

Alcune cose del CSS sono noiose da scrivere, specialmente con CSS3 e i diversi prefissi proprietari esistenti. Un mixin ti permette di creare gruppi di dichiarazioni CSS che puoi riutilizzare all'interno del tuo sito. Puoi anche passare dei valori per rendere il tuo mixin più flessibile. Un buon uso dei mixin è per i prefissi proprietari. Ecco un esempio per il border-radius.

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```

Per creare un mixin usi la direttiva `@mixin` e gli assegni un nome. Abbiamo chiamato il nostro mixin `border-radius`. Stiamo anche usando la variabile `$radius` dentro le parentesi così possiamo passare il raggio di ciò che vogliamo. Dopo aver creato il nostro mixin, possiamo utilizzarlo come una dichiarazione CSS che comincia per `@include` seguito dal nome del mixin. Quando il CSS viene generato, apparirà come segue:

```css
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

# ESERCIZIO

Scrivi un mixin `border` che accetta una variabile  `$thickness` e imposta lo stile `border-width` al valore di `$thickness`. Quindi, includi il mixin in una regola per l'elemento `img`, e imposta lo spessore del suo bordo a `10px`.

--
## SUGGERIMENTI

Per creare un foglio di stile Sass (SCSS), crea un nuovo file con l'estensione `.scss` e comincia a scrivere in SCSS. Quando hai terminato, devi eseguire:

```sh
$ {appname} verify stylesheet.scss
```

per proseguire. Il tuo foglio di stile sarà verificato, un rapporto generato, e la lezione marcata come 'completa' se hai completato l'esercizio con successo.
