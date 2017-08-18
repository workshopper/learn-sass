# OPERATORS

Mathematische Operationen in CSS machen zu können, ist sehr nützlich. SASS kennt eine Handvoll mathematischer Standardoperatoren wie `+`, `-`, `*`, `/` und `%`. In unserem Beispiel zeigen wir ein paar einfache Rechnungen, um die Breite für ein `aside` & einen `article` zu berechnen.

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

Wir haben ein sehr einfaches fließendes Gitternetz erzeugt, als Basis nehmen wir 960px. Operationen in SASS erlauben uns, Dinge zu tun wie diese: Pixelwerte nehmen und sie problemlos in Prozentwerte konvertieren. Das erzeugte CSS sieht wie folgt aus:

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

# ÜBUNG

Definiere eine Variable `$page-width` mit dem Wert `1400px` und eine Variable `$padding` mit dem Wert `20px`. Dann definiere eine Vorgabe für einen Selektor `.container`, setze sein `padding` auf den Wert `$padding` und seine `width` auf `0.8` multipliziert mit dem Wert der `$page-width`, minus zweimal der Wert vom `$padding`.
