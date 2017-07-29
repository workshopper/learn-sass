# 중첩(선택자)

HTML을 작성해보셨다면 내용이 태그로 중첩돼있고 시각적인 계층을 이루고 있다는걸 눈치채셨을 겁니다. 반면에 CSS는 어떤가요? 네. 없습니다. 그럼 Sass는 어떤 구조일까요? nav 선택자로 예를 들어보겠습니다:

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

ul, li, a 선택자가 nav 선택자 안에 중첩되 있다는걸 눈치채셨나요? 중첩은 CSS의 가독성을 높여주는 좋은 방법입니다. 위 파일로 CSS를 만들면 이렇게 됩니다:

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

# 과제

스타일 시트를 만들어봅시다. `ul` 선택자에 `margin: 0`를 설정하고 `a` 선택자에 `color: red`를 설정한 다음 `aside` 선택자 안에 두 선택자를 중첩해 보세요.
