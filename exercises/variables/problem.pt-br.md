# VARIÁVEIS

Pense nas variáveis como um jeito de guardar informações que você queira reusar em suas folhas de estilo. Você pode guardar coisas como cores, fontes, ou qualquer valor CSS que precise usar mais de uma vez. O Sass usa o símbolo `$` para tornar algo uma variável. Veja um exemplo:

```scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

Quando o Sass é processado, ele pega as variáveis que definimos para `$font-stack` e `$primary-color` e retorna CSS comum com os valores no lugar das variáveis. Isso pode ser extremamente poderoso quando trabalhamos com cores de marcas, mantendo-as consistentes pelo site.


```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

# EXERCÍCIO

Escreva uma folha de estilo que tenha uma variável `$color`, defina seu valor a '#000' e use-a para definir a propriedade `color` do elemento `body`.
