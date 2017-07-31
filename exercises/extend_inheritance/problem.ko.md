# 확장/상속

Sass의 강력한 기능 중 하나가 바로 확장과 상속입니다. `@extend`를 사용하여 선택자 간에 css 속성들을 공유할 수 있습니다. 이것은 Sass에서 불필요한 반복 작업을 줄여줍니다. 그럼 한 번 예제를 볼까요? 에러, 경고, 성공 메시지를 만들어 보겠습니다.

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

위의 코드는 `.message` 선택자에 있는 속성들을 `.success`, `.error`, `.warning` 선택자들이 상속을 받고 있습니다. 이것은 HTML에 여러 개의 클래스 이름을 쓰지 않아도 되도록 도와줍니다. 이 scss파일로 생성되는 CSS는 다음과 같습니다.

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

# 과제

`.push-button` 선택자에 `background-color: blue` 스타일을 추가한 뒤, .main-button 선택자가 그것을 상속받게 하세요. 그리고 추가로 `.main-button` 선택자에는 `font-weight: bold` 스타일도 설정해주세요.
