# OPERATORI

Poter eseguire calcoli matematici all'interno del tuo CSS è molto utile. Sass ha una serie di operatori matematici standard come `+`, `-`, `*`, `/,` e `%`. Nel nostro esempio utilizzeremo semplici regole per calcolare la larghezza di elementi `aside` e `article`.

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

Abbiamo creato una semplicissima grid fluida, basata su 960px. Le operazioni in Sass ci per mettono di ricevere valori in pixel e convertirli in percentuali senza particolari difficoltà. Il CSS generato apparirà come:

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

# ESERCIZIO

Definisci una variabile `$page-width` con il valore di `1400px`, e una variabile `$padding` con il valore di `20px`. Qunidi, definisci una regola per un selettore `.container`, imposta il suo `padding` al valore di `$padding`, e la sua larghezza `width` a `0.8` moltiplicato il valore di `$page-width`, meno il doppio del valore di `$padding`.
