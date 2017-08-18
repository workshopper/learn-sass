# EXTEND/INHERITANCE

Dies ist eins der nützlichsten Features von SASS. `@extend` ermöglicht, eine Menge an CSS-Properties aus einem Selektor in einem anderen zu benutzen. Es hilft, das DRY-Prinzip  ("don't repeat yourself - wiederhol Dich nicht") im eigenen SASS-Code umzusetzen.  In unserem Beispiel erzeugen wir eine einfache Reihe von Styles für Fehler- und Erfolgsmeldungen sowie Warnungen.

```scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
```

Obiger Codeschnippsel ermöglicht, die CSS-Eigenschaften aus `.message` für `.success`, `.error`, & `.warning` zu übernehmen. Die Magie passiert dann im erzeugten CSS. Auf diese Weise kann man vermeiden, Klassennamen mehrfach in HTML-Elementen schreiben zu müssen. So sieht es dann aus:

```css
.message, .success, .error, .warning {
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```

# ÜBUNG

Schreibe ein SASS-Script für den Selektor `.push-button` mit der Vorgabe `background-color: blue`, und eine Vorgabe für `.main-button`, die den `.push-button` ergänzt um die Eigenschaft `font-weight: bold`.
