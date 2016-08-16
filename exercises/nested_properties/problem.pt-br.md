# PROPRIEDADES ANINHADAS

CSS tem algumas poucas propriedades que estão em "namespaces", por exemplo, `font-family`, `font-size`, e `font-weight` estão todas no namespace `font`. No CSS, se você quiser definir várias propriedades no mesmo namespace, você tem que digitar isso toda vez. Sass fornece um atalho pra isso: apenas escreva o namespace uma vez, então aninhe as sub-propriedades nele. Por exemplo:

```scss
.funky {
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}
```

é compilado para:

```css
.funky {
  font-family: fantasy;
  font-size: 30em;
  font-weight: bold; }
```

A própria namespace pode ter um valor. Por exemplo: 

```scss
.funky {
  font: 20px/24px fantasy {
    weight: bold;
  }
}
```

é compilado para:

```css
.funky {
  font: 20px/24px fantasy;
    font-weight: bold;
}
```

# EXERCÍCIO

Defina um seletor `.sassy`, e use o aninhamento de propriedades para definir o `border-width` para '10px', `border-color` para 'red' e `border-radius` para '5px'.
