# ANNIDAMENTO

Scrivendo codice HTML avrai probabilmente notato che possiede una gerarchia chiara e visuale di annidamento. CSS, invece, ne è sprovvisto. Ecco un esempio tipico di stili per la navigazione di un sito:

```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

Noterai che i selettori `ul`, `li`, ed `a` sono annidati all'interno del selettore `nav`. Questa è un'ottima maniera di organizzare il tuo CSS e renderlo più leggibile. Quando generi il CSS otterrai un risultato come il seguente:

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

# ESERCIZIO

Scrivi un foglio di stile che imposta lo stile `margin: 0` dell'elemento `ul`, e il colore dei link a `red` per elementi contenuti all'interno di un elemento `aside`, usando le regole annidate.

--
## SUGGERIMENTI

Per creare un foglio di stile Sass (SCSS), crea un nuovo file con l'estensione `.scss` e comincia a scrivere in SCSS. Quando hai terminato, devi eseguire:

```sh
$ {appname} verify stylesheet.scss
```

per proseguire. Il tuo foglio di stile sarà verificato, un rapporto generato, e la lezione marcata come 'completa' se hai completato l'esercizio con successo.
