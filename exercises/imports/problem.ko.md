# 가져오기(IMPORTS)

CSS는 파일들을 작게 나누어 관리를 쉽게 하는 가져오기(IMPORTS) 기능이 있습니다. 하지만 단점이 있는데 CSS 내에서 `@import`를 사용할 때마다 HTTP request가 만들어집니다. Sass도 CSS와 같이 `@import`를 사용합니다. 하지만 HTTP request는 만들어지지 않고, 대신에 가져온 파일들을 하나의 CSS로 합쳐서 브라우저에 전달합니다.

실제 코드로 확인해봅시다. \_reset.scss 와 base.scss 두 파일이 있습니다. \_reset.scss을 base.scss에 가져와 봅시다.

```scss
// _reset.scss

html,
body,
ul,
ol {
   margin: 0;
  padding: 0;
}
```

```scss
// base.scss

@import 'reset';

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

reset.scss을 가져오기 위해, base.scss의 상단에 `@import 'reset';` 을 사용했습니다. 파일을 가져올 때 .scss 확장자는 필요하지 않습니다. Sass는 똑똑하거든요. 알아서 파일을 가져옵니다. 이 파일로 CSS를 만들면 이렇게 됩니다:


```css
html, body, ul, ol {
  margin: 0;
  padding: 0;
}

body {
  font: 100% Helvetica, sans-serif;
  background-color: #efefef;
}
```

# 과제

'#ff0000' 값을 가진 `$color` 변수를 선언한 뒤 별도의 스타일 시트로 저장하세요. 그리고 그 스타일 시트를 포함한 다음 `$color` 변수를 body 선택자의 color 스타일로 설정해보세요.