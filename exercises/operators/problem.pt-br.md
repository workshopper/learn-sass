# OPERADORES

Usar matemática no CSS ajuda muito. Sass suporta operadores matemáticos como `+`, `-`, `*`, `/,` e `%`. Em nosso exemplo usaremos matemática básica para calcular as larguras dos elementos `aside` e `article`.

```scss
.container { width: 100%; }

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complimentary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```

Nós criamos um grid bem simples e fluído, baseado em 960px. As operações no Sass nos permite pegar valores em pixel e convertê-los para porcentagem sem complicação. O CSS gerado se parecerá com isso:

```css
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 62.5%;
}

aside[role="complimentary"] {
  float: right;
  width: 31.25%;
}
```

# EXERCÍCIO

Defina uma variável `$page-width` com o valor `1400px`, e uma variável `$padding` com o valor de `20px`. Então, defina uma regra para o seletor `.container`, defina seu `padding` para o valor de `$padding`, e sua largura (`width`) para `0.8` vezes o valor de `$page-width`, menos duas vezes o valor de `$padding`.

--
## DICAS

Para criar uma folha de estilo em Sass (SCSS), crie um arquivo com a extensão `.scss` e comece a escrever SCSS. Quando estiver pronto, você deve executar:

```sh
$ {appname} verify stylesheet.scss
```

para prosseguir. Sua folha de estilo será testada, um relatório será gerado, e a lição será marcada como 'completada' se você tiver feito tudo corretamente.
