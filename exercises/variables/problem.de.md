# VARIABLES

Variablen kann man als einen Weg verstehen, um Informationen zu speichern, die man später im Stylesheet wieder verwenden möchte. Man kann Informationen wie Farben, Font Stacks oder jeden anderen CSS-Wert speichern, von dem man denkt, man braucht ihn später noch einmal. SASS verwendet das `$`-Symbol, um eine Variable zu kennzeichnen. Hier ein Beispiel:

```scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

Wenn das SASS-Script verarbeitet wird, nimmt es die Variablen, die wir für `$font-stack` und `$primary-color` definieren, und liefert normales CSS mit unseren Variablenwerten aus, die im CSS untergebracht werden. Dies kann extrem leistungsfähig eingesetzt werden, wenn man z. B. mit Farben zur Identifizierung einer Marke arbeiten und diese innerhalb der gesamten Site konsistent halten muss.

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

# ÜBUNG

Schreibe ein Stylesheet, das eine Variable `$color` definiert, ihren Wert auf '#000' setzt, und diese Variable verwendet, um den `color`-Style des `body`-Elements zu setzen.
