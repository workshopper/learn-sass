# NESTING

Wenn man HTML anschaut, sieht man auf den ersten Blick, dass es eine deutlich verschachtelte Hierarchie hat. CSS hat diese nicht. Hier ist ein Beispiel typischer Styles für die Navigation einer Site:

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

Man sieht dass die ul-, li- und a-Selektoren innerhalb eines Nav-Selektors geschachtelt sind. Das ist eine tolle Art, das eigene CSS zu gliedern und es einfacher lesbar zu machen. Wenn man das CSS erzeugt, bekommt man so etwas wie dies:

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

# ÜBUNG

Schreibe ein Stylesheet, das `margin: 0` zum `ul` hinzufügt und die Linkfarbe für Elemente, die innerhalb eines `aside`-Elements enthalten sind, auf `red` setzt. Verwende dafür Verschachtelung (Nesting).
