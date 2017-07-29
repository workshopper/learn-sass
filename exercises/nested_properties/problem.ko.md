# 중첩(스타일)

CSS는 같은 네임스페이스를 가지고 있는 스타일이 많습니다. 예를 들어 `font-family`, `font-size`, `font-weight` 에는 `font`라는 같은 네임스페이스를 가지고 있습니다. 이것들 전부 타이핑하려면 손이 아프겠죠? Sass는 이런 상황에 효율적인 방법을 가지고 있습니다. 네임스페이스를 한 번만 선언한 뒤, 중첩된 스타일 형식으로 그것을 포함할 수 있습니다.
예를 보시죠.

```scss
.funky {
  font: {
    family: fantasy;
    size: 30em;
    weight: bold;
  }
}
```

컴파일되는 CSS입니다.

```css
.funky {
  font-family: fantasy;
  font-size: 30em;
  font-weight: bold; }
```

namespace는 자체적로 값을 가지고 있을 수도 있습니다. 한 번 보시죠.

```scss
.funky {
  font: 20px/24px fantasy {
    weight: bold;
  }
}
```

컴파일되는 CSS입니다.

```css
.funky {
  font: 20px/24px fantasy;
    font-weight: bold;
}
```

# 과제

`.sassy`라는 선택자를 생성하세요. 그리고 중첩을 활용해 `border-width`에는 '10px'를, `border-color`에는 'red'를, `border-radius`에는 '5px'를 설정해보세요.
