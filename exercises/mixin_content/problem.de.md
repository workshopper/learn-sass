# MIXIN CONTENT

Inhaltsblöcke an ein Mixin weitergeben

Man kann einen Block mit Styles an den CSS-Präprozessor Mixin übergeben, um etwas innerhalb der Styles zu platzieren, die durch Mixin einbezogen werden. Die Styles erscheinen dann an der Location jeder `@content`-Anweisung, die in Mixin zu finden ist. Dies ermöglicht es, Abstraktionen bezogen auf die Konstruktion von Selektoren und Anweisungen zu definieren.

Zum Beispiel:

```scss
@mixin apply-to-ie6-only {
  * html {
    @content;
  }
}
@include apply-to-ie6-only {
  #logo {
    background-image: url(/logo.gif);
  }
}
```

Erzeugt:

```css
* html #logo {
  background-image: url(/logo.gif);
}
```

Hinweis: Wenn die `@content`-Anweisung mehr als einmal oder innerhalb einer Schleife spezifiziert ist, wird der Style-Block mit jedem Aufruf dupliziert.

# ÜBUNG

Ändere den `border-thickness`-Mixin aus der vorherigen Übung so, dass auch ein `@content` erlaubt ist. Aktiviere dies dadurch, dass die Vorgabe umgesetzt wird, die den `border-style` des `img`-Elements auf `solid` setzt.
