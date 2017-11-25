# 연산자

CSS에서 연산자를 사용할 수 있다는 건 매우 유용합니다. Sass는 `+`, `-`, `*`, `/,`,`%`와 같은 표준 수학 연산자들을 제공합니다. `aside`와 `article` 선택자의 넓이를 연산자를 사용하여 계산하는 예제를 한번 보시죠.

```scss
.container { width: 100%; }

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complimentary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```

960px 기준의 간단한 가변성 그리드를 만들어 봤습니다. pixel값을 받아서 백분율을 구하는 식입니다. 아주 간단하죠? 생성되는 CSS는 다음과 같습니다.

```css
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 62.5%;
}

aside[role="complimentary"] {
  float: right;
  width: 31.25%;
}
```

# 과제

`1400px`값을 갖는 `$page-width` 변수와 `20px`값을 갖는 `$padding` 변수를 선언하세요. 그다음 `.container` 선택자를 만들고 `padding` 스타일을 추가해서 $padding 변수를 할당하고 `width` 스타일을 추가해서 `$page-width` 변수에 `0.8`을 곱한 값에서 `$page-width`에 2를 곱한 값을 빼서 할당하세요.
