# MIXIN CONTENT

Mixin에 스타일 블록을 넘겨주기

mixin 내부의 스타일을 설정하는 방법으로, 스타일 블록을 통째로 넘겨줄 수도 있습니다. 이 스타일 블록은 mixin 내부의 `@content`에 설정됩니다. 이 기능은 선택자와 지시어의 구성에 관한 추상화를 가능하게 합니다.

예를 봅시다.

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

컴파일되는 CSS입니다.

```css
.colors {
  background-color: blue;
  color: white;
  border-color: blue;
}
```

주의: `@content` 지시어가 한 번 이상 혹은 반복문 안에서 사용되는 경우, 스타일 블록이 각각의 호출에 중복되어 나타납니다.

# 과제

이전 과제에서 만든 `border-thickness` mixin에 `@content` 지시어를 추가하세요. 그리고 이전 과제에서 만든 `img` 선택자에서 border를 `@include` 할 때, `@content`에 추가될 내용으로 `border-style` 스타일을 `solid`값으로 설정하세요.
