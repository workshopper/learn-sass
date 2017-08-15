# WHILE LOOP

Die `@while`-Anweisung nimmt einen SASS-Script-Ausdruck und liefert wiederholt die Styles, die in der Verschachtelung stehen, bis die While-Bedingung nicht mehr erfüllt ist. Dies kann verwendet werden, um komplexere Schleifen abzubilden, als eine `@for`-Anweisung das kann, auch wenn dies selten notwendig ist. Zum Beispiel:

```scss
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}
```

wird kompiliert zu:

```css
.item-6 {
  width: 12em; }

.item-4 {
  width: 8em; }

.item-2 {
  width: 4em; }
```

# ÜBUNG

Schreibe Vorgaben für die Elemente `h1` bis `h6`, die ihre `font-size` auf `24px` minus `3px` mal die Überschriftenebene (heading level) setzen, d. h. `h1` hätte eine `font-size` von `24px - 3px * 1`, also `21px`, wenn man diese `@while`-Anweisung verwendet. Vergleiche mit dem Code der vorherigen Übung.
