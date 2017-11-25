# IMPORTS

In CSS gibt es die Möglichkeit, über die man CSS in kleinere, besser wartbare Portionen aufteilen kann. Der einzige Nachteil ist, dass jedes Mal, wenn man `@import` in CSS benutzt, dies einen neuen HTTP-Request erzeugt. SASS setzt auf der aktuellen CSS-`@import`-Anweisung auf. Aber statt einen neuen HTTP-Request anzufordern, nimmt SASS die Datei, die man importieren möchte, und vereint diese mit der Datei, in die man gerade importiert, so dass man den Webbrowser mit nur einer einzelnen CSS-Datei beliefert. 

Angenommen, man hat zwei SASS-Dateien, \_reset.scss und base.scss. Nun möchte man \_reset.scss in base.scss importieren.

```scss
// _reset.scss

html,
body,
ul,
ol {
   margin: 0;
  padding: 0;
}
```

```scss
// base.scss

@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

Achtung, wir benutzen hier `@import 'reset';` in der base.scss-Datei. Wenn man eine Datei importiert, muss man nicht die Dateiendung .scss mitgeben. SASS ist schlau und findet das selbst heraus. Wenn man das CSS generiert, erhält man

```css
html, body, ul, ol {
  margin: 0;
  padding: 0;
}

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

# ÜBUNG

Schreibe ein Partial (Stück Script), das eine Variable `$color` definiert und deren Wert auf '#ff0000' setzt, und ein Stylesheet, dass dieses Partial importiert und die Variable benutzt, um den `color`-Style des body-Elements setzt.
