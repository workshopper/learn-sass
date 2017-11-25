# PARENT SELECTOR

Manchmal ist es hilfreich, einen verschachtelten Parent Selector für eine Regel in einer anderen Weise als die Default-Vorgehensweise einzusetzen. Zum Beispiel möchte man spezielle Styles für den Fall haben, dass ein Selektor durch die Maus getroffen wird oder wenn das body-Element eine bestimmte Klasse hat. In diesen Fällen kann man explizit spezifizieren, wo der Parent Selector eingefügt werden soll, indem man das `&`-Zeichen benutzt.

`&` wird durch den Parent Selector ersetzt, wenn es im CSS auftaucht. Das bedeutet, dass wenn man eine tief verschachtelte Vorgabe hat, der Parent Selector aufgelöst wird, bevor das `&` ersetzt wird. Zum Beispiel:

```scss
#main {
  color: black;
  a {
    font-weight: bold;
    &:hover { color: red; }
  }
}
```

wird kompiliert zu:

```css
#main {
  color: black; }
  #main a {
    font-weight: bold; }
    #main a:hover {
      color: red; }
```

# ÜBUNG

Schreibe eine Vorgabe für das `button`-Element, das seine `color` auf 'black' setzt, und verwende den Parent Selector `&`, um seine `color` auf 'red' zu setzen, wenn das Element in den Fokus kommt, und zwar mit Hilfe des Peudoselektors `:focus`.
