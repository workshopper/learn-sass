# CONTEÚDO DO MIXIN

Passando blocos de conteúdo para o Mixin

É possível passar blocos de estilo pelo mixin que serão colocados dentro do estilo incluído pelo mixin. O estilo aparecerá no lugar das diretivas `@content` encontradas no mixin. O que torna possível definir abstrações relativas a construção de seletores e diretivas.

Por exemplo:

```scss
$color: white;

@mixin colors($new-color: blue) {
  background-color: $new-color;
  @content;
  border-color: $new-color;
}

.colors {
  @include colors { 
    color: $color; 
  }
}
```

Gera:

```css
.colors {
  background-color: blue;
  color: white;
  border-color: blue;
}
```

Nota: quando a diretiva `@content` for específicada mais de uma vez ou num loop, o bloco de estilo é duplicado a cada chamada.

# EXERCÍCIO

Modifique o mixin `border-thickness` do exercício anterior para também aceitar a diretiva `@content`, e chame-a passando uma regra que defina a propriedade `border-style` do elemento `img` para `solid`.
