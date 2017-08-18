# INTERPOLATION

Man kann SASS-Script-Variablen auch in Selektoren und  Eigenschaftsnamen (Namen für Properties) benutzen, indem man die `#{}` -Interpolationssyntax verwendet:

```scss
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}
```

wird kompiliert zu:

```css
p.foo {
  border-color: blue; }
```

Man kann`#{}` auch benutzen, um SASS-Script in Eigenschaftswerte (Werte für Properties) hineinzustecken. In den meisten Fällen ist das nicht besser, als eine Variable zu benutzen, aber indem man `#{}` verwendet, erreicht man damit, dass jede Operation in der Nähe als reines CSS behandelt wird. Zum Beispiel:

```scss
p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}
```

wird kompiliert zu:

```css
p {
  font: 12px/30px; }
```

# ÜBUNG

Definiere eine Variable `$selector` und setze ihren Wert auf 'article'. Dann schreibe eine Vorgabe, die den interpolierten Wert der `$selector`-Variable als Selektor nutzt, und setze ihre Farbe auf `#ff0000`.
