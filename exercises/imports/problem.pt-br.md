# IMPORTS

CSS tem uma opção de importação que permite você dividir seu código em pequenas partes, em porções que podem ser mantidas melhor. A única desvantagem é que cada vez que você usar `@import` no CSS ele cria uma requisição HTTP. Sass criou algo semelhante sobre o `@import` atual do CSS, mas ao invés de requerir uma requisição HTTP, Sass pegará os arquivos que deseja importar e combinar com o arquivo que o está importando, assim você fornecerá apenas um arquivo CSS ao navegador.

Digamos que você tenha alguns arquivos Sass, \_reset.scss e base.scss. Nós queremos importar o \_reset.scss para base.scss.

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

Perceba que estamos usando `@import 'reset';` no arquivo base.scss. Quando você importa um arquivo você não precisa incluir sua extensão. O Sass é inteligente e irá descobrir isso pra você. Quando você gerar seu CSS terá:

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

# EXERCÍCIO

Escreva um arquivo que contenha uma variável `$color` e defina seu valor a '#ff0000', e uma folha de estilo que importa esse arquivo, então use a variável para definir a propriedade `color` do elemento body.
