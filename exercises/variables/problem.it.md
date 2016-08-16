# VARIABILI

Pensa alle variabili come una maniera di immagazzinare informazione che desideri riutilizzare all'interno del tuo foglio di stile. Puoi immagazzinare cose come colori, sistemi di caratteri, o qualsiasi valore CSS che ti venga in mente di riutilizzare. Sass usa il simbolo `$` per indicare una variabile. Ecco un esempio:

```scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

Quando il Sass viene compilato, le variabili `$font-stack` e `$primary-color` vengono sostituite nel CSS risultante con il valore loro assegnato. Ciò può essere estremamente potente quando si usano colori di un marchio e si desidera mantenerli consistenti all'interno dell'intero sito.

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

# ESERCIZIO

Scrivi un foglio di stile che definisce una variabile `$color`, imposta il suo valore a '#000', e la utilizza per impostare lo stile `color` dell'elemento `body`.
