# MIXINS

Algumas coisas no CSS são um pouco tediantes de escrever, especialmente com CSS3 e seus tantos vendors (prefíxos). Um mixin permite você criar grupos de declaração CSS que você queira reusar pelo site. Você pode até passar parâmetros para torná-lo mais flexível. Um bom uso de mixin é para os vendors. Aqui está um exemplo de border-radius.

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```

Para criar um mixin você deve usar a diretiva `@mixin` e dar a ela um nome. Nós chamamos nosso mixin de `border-radius`. Nós também estamos usando a variável `$radius` dentro de parênteses, assim podemos passar o valor que desejarmos. Depois de criar seu mixin, você pode usá-lo como uma declaração CSS usando `@include` seguido de seu nome. Quando seu CSS for gerado, ele se parecerá com isso:

```css
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

# EXERCÍCIO

Faça um mixin `border` que aceita uma variável `$thickness` e defina a propriedade `border-width` ao valor de `$thickness`. Então, inclua esse mixin como regra para o elemento `img`, e defina a espessura da borda para `10px`.

--
## DICAS

Para criar uma folha de estilo em Sass (SCSS), crie um arquivo com a extensão `.scss` e comece a escrever SCSS. Quando estiver pronto, você deve executar:

```sh
$ {appname} verify stylesheet.scss
```

para prosseguir. Sua folha de estilo será testada, um relatório será gerado, e a lição será marcada como 'completada' se você tiver feito tudo corretamente.
