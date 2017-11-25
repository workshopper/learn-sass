# FOR-SCHLEIFE

Die `@for`-Anweisung liefert eine vorgegebene Menge an grundsätzlich gleich aufgebauten Styles aus. Pro Wiederholung der Schleife gibt es eine Zählervariable, die das generierte Ergebnis variiert. Die Anweisung kennt zwei Formate: `@for $var from <start> through <end>` und `@for $var from <start> to <end>`. Achte auf den Unterschied zwischen den Schlüsselwörtern `through` und `to`. `$var` kann jeden beliebigen Variablennamen bekommen, zum Beispiel `$i`; `<start>` und `<end>` sind festgelegte SASS-Script-Ausdrücke, es handelt sich um ganze Zahlen (Integer). Ist `<start>` größer als `<end>`, zählt der Zähler herunter statt hoch.

Die `@for`-Anweisung setzt den `$var`-Wert für jede Zahl im definierten Bereich und gibt mit jedem Hoch- oder Herunterzählen dem Style die Nummer, der durch diese Zahl identifiziert wird. Für das `from ... through`-Format  _umfasst_ der Bereich die Werte für `<start>` und `<end>`, aber das `from ... to`-Format zählt, _ohne_ den Wert für `<end>` _einzuschließen_. Verwendet man die `through`-Syntax,

```scss
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}
```

wird das kompiliert zu:

```css
.item-1 {
  width: 2em; }
.item-2 {
  width: 4em; }
.item-3 {
  width: 6em; }
```

# ÜBUNG

Schreibe Vorgaben für die Elemente `h1` bis `h6`, die die `font-size` auf `24px` minus `3px` mal die Überschriftenebene (heading level) setzt, z. B.  würde`h1` die `font-size` von `24px - 3px * 1`, also `21px` bekommen, wenn man diese `@for`-Anweisung einsetzt.
