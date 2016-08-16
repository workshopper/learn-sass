# IMPORT

Il CSS possiede un'opzione di importazione che ti permette di suddividere il tuo CSS in frammenti più piccoli e più mantenibili. L'unico svantaggio è che ogni volta che usi `@import` in CSS, viene prodotta una nuova richiesta HTTP. Sass sfrutta l'attuale direttiva CSS `@import` ma anziché richiedere una richiesta HTTP, Sass prenderà il file che desideri importare e lo combinerà con il file in cui stai effettuando l'importazione, in modo tale da servire un singolo file CSS al browser.

Ammettiamo di avere un paio di file Sass, \_reset.scss e base.scss. Vogliamo importare \_reset.scss e base.scss.

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

Nota che stiamo utilizzando `@import 'reset';` nel file base base.scss. Quando importi un file non hai bisogno di specificare l'estensione del file .scss. Sass è intelligente e lo aggiungerà al tuo posto. Quando il CSS viene generato otterrai:

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

# ESERCIZIO

Scrivi un file parziale che definisca una variabile `$color` e imposti il suo valore a '#ff0000', e un foglio di stile che importi il parziale, e utilizzi la variabile per impostare lo stile `color` dell'elemento body.
