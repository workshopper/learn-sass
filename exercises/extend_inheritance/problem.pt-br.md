# EXTENSÕES/HERANÇA

Essa é uma das funcionalidades mais úteis do Sass. Usar `@extend` te permite compartilhar um conjunto de propriedades CSS de um seletor pra outro. Isso te ajuda a não repetir código. Em nosso exemplo iremos criar uma simples série de mensagens para erros, avisos e sucesso.

```scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: yellow;
}
```

O que o código acima faz é permitir que você deixe as propriedades CSS em `.message` e aplique as mesmas em `.success`, `.error`, e `.warning`. A mágica acontece com o CSS gerado, e isso ajuda a evitar escrever múltiplas classes nos elementos HTML. O resultado é esse:

```css
.message, .success, .error, .warning {
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```

# EXERCÍCIO

Escreva uma regra para o seletor `.push-button` com `background-color: blue`, e uma regra para o seletor `.main-button` que será extendida de `.push-button`, e defina `font-weight: bold` para a mesma.
