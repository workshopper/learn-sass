# MIXINS

CSS 작성 시에 지루한 작업이 몇몇 있습니다. 특히 CSS3에 존재하는 많은 접두사가 그렇습니다. 이때 mixin을 사용하면 css 그룹 선언을 할 수 있습니다. 함수처럼 인자를 받아서 값을 설정할 수도 있습니다. 특히 mixin은 각 업체가 제공하는 접두사를 그룹 선언할 때 유용합니다. 예를 한번 보시죠.

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.box { @include border-radius(10px); }
```

mixin을 만들려면 `@mixin` 이라는 지시어와 함께 이름을 지정해줘야 합니다. 여기서 우리는 `border-radius` 이라는 이름을 지정해 줬습니다. 또한 `$radius` 라는 변수를 괄호 안에 지정해서 어떤 값이라도 지정할 수 있도록 만들었습니다. mixin을 사용하려면 `@include` 뒤에 mixin의 이름을 지정한 뒤에 css 스타일처럼 사용하면 됩니다.

```css
.box {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```

# 과제

직접 mixin을 만들어봅시다. 이름은 `border`, 인자로 `$thickness` 를 받고, `border-width` 스타일에 인자로 받은 `$thickness` 를 설정하세요. 그러고 나서 `img` 선택자의 스타일에 방금 만든 `border` 를 인자 `10px` 를 넣어서 설정해주세요.