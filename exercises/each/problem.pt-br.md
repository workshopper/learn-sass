# ITERADOR EACH

A diretiva `@each` geralmente tem a forma `@each $var in <lista ou mapa>`. `$var` pode ter qualquer nome de variável, como `$length` ou `$name`, e `<lista ou mapa>` é uma expressão SassScript que retorna uma lista ou mapa.

A regra `@each` define `$var` para cada item da lista ou mapa, então retorna os estilos que contém usando o valor de `$var`. Por exemplo:

```scss
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
```

é compilado para:

```css
.puma-icon {
  background-image: url('/images/puma.png'); }
.sea-slug-icon {
  background-image: url('/images/sea-slug.png'); }
.egret-icon {
  background-image: url('/images/egret.png'); }
.salamander-icon {
  background-image: url('/images/salamander.png'); }
```

# EXERCÍCIO

Escreva um script Sass que gera regras para os seletores `.#{$big-cat}-picture`, onde `$big-cat` é um dos 'cheetah', 'puma', 'jaguar', 'panther', 'tiger', 'leopard', e defina seu `padding` para '3em'.
