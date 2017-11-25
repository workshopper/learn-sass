# NESTED PROPERTIES

In CSS gibt es einige Eigenschaften in sogenannten “namespaces;” zum Beispiel sind `font-family`, `font-size` und `font-weight` alle im `font`-Namespace. Wenn man in CSS ein Bündel von Eigenschaften im selben Namespace definieren möchte, muss man diesen jedes Mal ausschreiben. SASS bietet eine Abkürzung für diese Fälle: Man schreibt den Namespace nur einmal, dann wird dieser für jede der Untereigenschaften herangezogen (Stichwort Schachtelung). Zum Beispiel:

```scss
.funky {
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}
```

wird kompiliert zu:

```css
.funky {
  font-family: fantasy;
  font-size: 30em;
  font-weight: bold; }
```

Der Eigenschaftsnamespace selbst kann auch einen Wert bekommen. Zum Beispiel:

```scss
.funky {
  font: 20px/24px fantasy {
    weight: bold;
  }
}
```

wird kompiliert zu:

```css
.funky {
  font: 20px/24px fantasy;
    font-weight: bold;
}
```

# ÜBUNG

Definiere einen Selektor `.sassy` und verwende die geschachtelten Eigenschaften, um `border-width` auf '10px' zu setzen, `border-color` auf 'red' und `border-radius` auf '5px'.
