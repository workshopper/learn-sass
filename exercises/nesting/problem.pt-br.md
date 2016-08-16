# ANINHAMENTO

Quando esta escrevendo HTML, você deve notar que ele tem uma hierarquia clara e visual. Por outro lado, o CSS não. Aqui está um exemplo típico de estilo para a navegação do site:


```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

Você deve ter percebido que o ul, li e os seletores estão aninhados dentro do seletor nav. Isso é ótimo para organizar seu CSS e torná-lo mais fácil de ser lido. Quando você gerar seu CSS, você terá algo desse tipo:

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

# EXERCÍCIO

Escreva uma folha de estilo que define `margin: 0` para o `ul`, e a cor dos links para `red` para elementos contidos num elemento `aside`, usando aninhamento.
