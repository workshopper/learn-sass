# EREDITARIETÀ CON EXTEND

Questa è una delle caratteristiche più utili di Sass. La direttiva `@extend` ti permette di riutilizzare un insieme di proprietà CSS da un selettore all'altro. Aiuta a mantenere il tuo Sass DRY (=Don't Repeat Yourself, _evita di ripeterti_). Nel nostro esempio ci apprestiamo a creare una semplice serie di messaggi per condizioni di errore, avvisi e successo.

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

Il codice qui sopra ti permette di riutilizzare le proprietà CSS definite in `.message` e applicarle a `.success`, `.error` e `.warning`. Il CSS generato viene espanso con le proprietà del selettore esteso. Ciò ti consente di evitare di aggiungere classi multiple agli elementi HTML come solito in OOCSS. Questo è il risultato finale:

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

# ESERCIZIO

Scrivi una regola per il selettore `.push-button` con la proprietà `background-color: blue`, e una regola per il selettore `.main-button` in maniera tale che estenda `.push-button`, e imposti inoltre la proprietà `font-weight: bold`.

--
## SUGGERIMENTI

Per creare un foglio di stile Sass (SCSS), crea un nuovo file con l'estensione `.scss` e comincia a scrivere in SCSS. Quando hai terminato, devi eseguire:

```sh
$ {appname} verify stylesheet.scss
```

per proseguire. Il tuo foglio di stile sarà verificato, un rapporto generato, e la lezione marcata come 'completa' se hai completato l'esercizio con successo.
