# LAÇO WHILE

A diretiva `@while` pega uma expressão SassScript e repetidamente retorna estilos aninhados até que o statement seja falso. Isso pode ser usado para alcançar maior complexidade no laço do que o statement `@for` é capaz, contudo isso é raramente necessário. Por exemplo:


```scss
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}
```

é compilado para:

```css
.item-6 {
  width: 12em; }

.item-4 {
  width: 8em; }

.item-2 {
  width: 4em; }
```

# EXERCÍCIO

Escreva regras para os elementos `h1` até `h6` que defina seu `font-size` para `24px` menos `3px` vezes o level do cabeçalho, por exemplo, `h1` terá `font-size` de `24px - 3px * 1` que é igual a `21px`, usando a diretiva `@while`. Compare com o código do exercício anterior.
