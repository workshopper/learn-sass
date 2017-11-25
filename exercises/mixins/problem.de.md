# MIXINS

Einige Dinge in CSS sind ein bisschen lästig zu schreiben, besonders mit CSS3 und den vielen Herstellerpräfixen, die existieren. Ein Mixin (einer der CSS-Präprozessoren) ermöglicht es, Gruppen von CSS-Deklarationen zu machen, die man innerhalb einer Site wiederverwenden möchte. Man kann sogar Werte übergeben, um den Mixin flexibler zu machen. Ein sinnvoller Einsatz eines Mixins existiert für Herstellerpräfixe (Vendorpräfixe). Hier ein Beispiel für border-radius.

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```

Um einen Mixin zu erzeugen, benutzt man die `@mixin`-Anweisung und gibt ihr einen Namen. Wir haben unser Mixin `border-radius` genannt. Wir benutzen außerdem die Variable `$radius` innerhalb der Klammern, so dass wir einen Radius übergeben können, der uns beliebt. Nachdem man einen Mixin erzeugt hat, kann man diesen dann als CSS-Deklaration benutzen, die mit `@include` beginn, gefolgt vom Namen des Mixin. Wenn das CSS erzeugt ist, sieht es wie folgt aus:

```css
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

# ÜBUNG

Schreibe ein Mixin `border`, das eine Variable `$thickness` akzeptiert und den `border-width`-Style auf den Wert der `$thickness` setzt. Dann füge dem Mixin eine Vorgabe hinzu für das `img`-Element, und setze seine Rahmendicke auf `10px`.
