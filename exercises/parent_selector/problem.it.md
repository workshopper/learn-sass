# SELETTORE DEL GENITORE

A volte è utile utilizzare il selettore del genitore di una regola annidata in maniere diverse da quella predefinita. Ad esempio, potresti volere assegnare stili speciali quando il selettore viene sorvolato dal mouse, oppure quando l'elemento body possiede una certa classe. In questi casi puoi specificare esplicitamente dove il selettore del genitore debba essere inserito usando il carattere `&`.

`&` sarà sostituito con il selettore del genitore così come appare nel CSS. Ciò significa che se hai una regola profondamente annidata, il selettore del genitore sarà risolto completamente prima che `&` venga sostituito. Ad esempio:

```scss
#main {
  color: black;
  a {
    font-weight: bold;
    &:hover { color: red; }
  }
}
```

viene compilato come:

```css
#main {
  color: black; }
  #main a {
    font-weight: bold; }
    #main a:hover {
      color: red; }
```

# ESERCIZIO

Scrivi una regola per l'elemento `button` impostandone lo stile `color` a 'black', e usa il selettore del genitore `&` per impostarne il valore di `color` a 'red' quando l'elemento riceve il focus, attraverso lo pseudo selettore `:focus`.
