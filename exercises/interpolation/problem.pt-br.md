# INTERPOLAÇÃO

Você também pode usar variáveis SassScript nos seletores e nomes de propriedade usando a síntaxe de interpolação `#{}`:

```scss
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}
```

é compilado para:

```css
p.foo {
  border-color: blue; }
```

Também é possível usar `#{}` para usar SassScript nos valores das propriedades. Na maioria dos casos isso não é melhor do que usar variáveis, mas usar `#{}` significa que qualquer operação próxima será tratada como CSS puro. Por exemplo:

```scss
p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}
```

é compilado para:

```css
p {
  font: 12px/30px; }
```

# EXERCÍCIO

Defina uma variável `$selector` com o valor 'article'. Então escreva uma regra usando o valor interpolado de `$selector` como um seletor, com a propriedade `color` para `#ff0000`.

--
## DICAS

Para criar uma folha de estilo em Sass (SCSS), crie um arquivo com a extensão `.scss` e comece a escrever SCSS. Quando estiver pronto, você deve executar:

```sh
$ {appname} verify stylesheet.scss
```

para prosseguir. Sua folha de estilo será testada, um relatório será gerado, e a lição será marcada como 'completada' se você tiver feito tudo corretamente.
