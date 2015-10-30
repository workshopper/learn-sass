# SELETOR PAI

As vezes é útil usar as regras aninhadas no seletor pai de outras formas. Por exemplo, você deve querer estilos especiais pra quando um seletor estiver sob efeito hover ou quando o elemento body tiver uma certa classe. Nesses casos, você pode explicitamente especificar quando o seletor pai deve ser inserido usando o caracter `&`.

`&` será substituído pelo seletor pai quando aparecer no CSS. Isso significa que se você tiver muitas regras aninhadas, o seletor pai será totalmente resolvido antes do caracter `&` ser substituído. Por exemplo:

```scss
#main {
  color: black;
  a {
    font-weight: bold;
    &:hover { color: red; }
  }
}
```

é compilado para:

```css
#main {
  color: black; }
  #main a {
    font-weight: bold; }
    #main a:hover {
      color: red; }
```

# EXERCÍCIO

Escreva uma regra para o elemento `button` definindo sua cor (`color`) para 'black', e use o seletor pai `&` para definir sua cor para 'red', quando o elemento estiver em foco, usando o pseudo seletor `:focus`.

--
## DICAS

Para criar uma folha de estilo em Sass (SCSS), crie um arquivo com a extensão `.scss` e comece a escrever SCSS. Quando estiver pronto, você deve executar:

```sh
$ {appname} verify stylesheet.scss
```

para prosseguir. Sua folha de estilo será testada, um relatório será gerado, e a lição será marcada como 'completada' se você tiver feito tudo corretamente.
