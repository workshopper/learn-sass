# LAÇO FOR

A diretiva `@for` repetidamente retorna um conjunto de estilo. Pra cada repetição, uma variável contador é usada para alterar seu retorno. A diretiva tem duas formas: `@for $var from <começo> through <fim>` e `@for $var from <começo> to <fim>`. Note a diferença nas palavras-chave `through` e `to`. `$var` pode ter qualquer nome de variável, como `$i`; `<começo>` e `<fim>` são expressões SassScript que devem retornar inteiros. Quando `<começo>` é maior que `<fim>` o contador será decrementado invés de incrementado.

O `@for` define `$var` para cada número consecutivo específicado na variação e a cada vez retorna estilos aninhados usando o valor de `$var`. Com a forma `form ... through`, a variação _inclui_ os valores de `<começo>` e `<fim>`, mas na forma `from ... to` o valor de `<fim>` _não é incluído_. Usando a síntaxe `through`,

```scss
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}
```

é compilado para:

```css
.item-1 {
  width: 2em; }
.item-2 {
  width: 4em; }
.item-3 {
  width: 6em; }
```

# EXERCÍCIO

Escreva regras para os elementos `h1` até `h6` que defina seu `font-size` para `24px` menos `3px` vezes o level do cabeçalho, por exemplo, `h1` terá `font-size` de `24px - 3px * 1` que é igual a `21px`, usando a diretiva `@for`.
