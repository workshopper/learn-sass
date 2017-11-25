# 변수

스타일 시트에서 재활용할 값을 변수에 저장할 수 있다면 어떨까요? 예를 들면 색깔, 글씨체 등등의 CSS 속성들이 있겠네요. Sass는 가능합니다. `$`를 사용해서 말이죠. 다음과 같이 사용할 수 있습니다. 한 번 보시죠.

```scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

SCSS 파일 안에 변수 `$font-stack`, `$primary-color`를 정의하고, 동일 파일의 스타일 부분에 해당 변수들이 존재하면 Sass는 그것들을 각각의 변수의 값들로 치환시킨 다음 CSS 파일을 만들어 냅니다. 이 기능은 웹사이트의 대표 색깔을 지정하고 계속해서 쓰는 경우에 매우 편리합니다.

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

# 과제

스타일 시트를 만들어봅시다. '#000' 값을 갖는 `$color` 변수를 선언하고, 그것을 사용해서 `body` 선택자에 `color` 스타일을 설정해보세요.
