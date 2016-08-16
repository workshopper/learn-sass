# CONTEÚDO DO MIXIN

Passando blocos de conteúdo para o Mixin

É possível passar blocos de estilo pelo mixin que serão colocados dentro do estilo incluído pelo mixin. O estilo aparecerá no lugar das diretivas `@content` encontradas no mixin. O que torna possível definir abstrações relativas a construção de seletores e diretivas.

Por exemplo:

```scss
@mixin apply-to-ie6-only {
  * html {
    @content;
  }
}
@include apply-to-ie6-only {
  #logo {
    background-image: url(/logo.gif);
  }
}
```

Gera:

```css
* html #logo {
  background-image: url(/logo.gif);
}
```

Nota: quando a diretiva `@content` for específicada mais de uma vez ou num loop, o bloco de estilo é duplicado a cada chamada.

# EXERCÍCIO

Modifique o mixin `border-thickness` do exercício anterior para também aceitar a diretiva `@content`, e chame-a passando uma regra que defina a propriedade `border-style` do elemento `img` para `solid`.
