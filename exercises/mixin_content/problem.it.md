# CONTENUTO DEI MIXIN

Passare un blocco di contenuti ad un mixin

È possibile passare un blocco di stili al mixin perché venga posizionato all'interno degli stili inclusi dal mixin. Gli stili appariranno nella posizione di ciascuna direttiva `@content` trovata all'interno del mixin. Ciò rende possibile definire astrazioni relative alla costruzione di selettori e direttive.

Ad esempio:

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

Genera:

```css
* html #logo {
  background-image: url(/logo.gif);
}
```

Nota: quando la direttiva `@content` viene specificata più di una volta o all'interno di un ciclo, il blocco di stili sarà ripetuto a ciascuna invocazione.

# ESERCIZIO

Modifica il mixin `border-thickness` dell'esercizio precedente perché accetti un blocco `@content`, e invocalo passandogli una regola che imposta lo stile `border-style` dell'elemento `img` a `solid`.
