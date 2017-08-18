# EACH-ITERATOR

Die `@each`-Anweisung hat üblicherweise das Format `@each $var in <list or map>`. `$var` kann jeden beliebigen Variablennamen bekommen, z. B. `$length` oder `$name`, und `<list or map>` ist ein SASS-Script-Ausdruck, der eine Liste oder eine Map zurückgibt.

Die `@each`-Vorgabe legt für die Variablen `$var` für jedes Element der Liste oder Map fest, welche Styles gesetzt werden sollen, indem sie den Wert von `$var` einsetzt. Zum Beispiel:

```scss
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
```

wird compiliert zu:

```css
.puma-icon {
  background-image: url('/images/puma.png'); }
.sea-slug-icon {
  background-image: url('/images/sea-slug.png'); }
.egret-icon {
  background-image: url('/images/egret.png'); }
.salamander-icon {
  background-image: url('/images/salamander.png'); }
```

# ÜBUNG

Schreibe ein SASS-Script, das Vorgaben für den Selektor `.#{$big-cat}-picture` generiert, durch die `$big-cat` ein Element der Liste 'cheetah', 'puma', 'jaguar', 'panther', 'tiger', 'leopard' ist, und das `padding` auf '3em' setzt.
