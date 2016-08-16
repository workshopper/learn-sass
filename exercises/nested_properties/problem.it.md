# PROPRIETÀ ANNIDATE

Il CSS possiede parecchie proprietà che sono raggruppate in “namespaces;” ad esempio, `font-family`, `font-size`, e `font-weight` sono tutte nel namespace `font`. In CSS, se vuoi impostare un insieme di proprietà nello stesso namespace, devi scriverlo ripetutamente per esteso. Sass fornisce una scorciatoia a questo scopo: scrivi il namespace una volta sola, quindi annida ciascuna delle sotto-proprietà al suo interno. Ad esempio:

```scss
.funky {
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}
```

viene compilato come:

```css
.funky {
  font-family: fantasy;
  font-size: 30em;
  font-weight: bold; }
```

La proprietà namespace può avere essa stessa un valore. Ad esempio:

```scss
.funky {
  font: 20px/24px fantasy {
    weight: bold;
  }
}
```

viene compilato come:

```css
.funky {
  font: 20px/24px fantasy;
    font-weight: bold;
}
```

# ESERCIZIO

Definisci un selettore `.sassy`, e usa proprietà annidate per impostare lo stile `border-width` a '10px', `border-color` a 'red' e `border-radius` a '5px'.
