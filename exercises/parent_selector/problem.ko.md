# 부모 선택자

부모 선택자를 중첩 형식으로 재활용해서 사용하는 것은 가끔 유용합니다. 예를 들면, 어떤 선택자에 마우스가 위치했을 때나, body 요소가 특정 클래스를 가지고 있을 때만 특별히 스타일을 적용 하고 싶은 경우가 있습니다. 이러한 경우에 `&` 문자를 부모 선택자 삽입할 위치에 명시하면, 부모 선택자가 그 위치에 입력됩니다. 여러 번 중첩이 된 경우에도 전 경로에 있는 부모 선택자가 입력됩니다. 예를 보시죠.

```scss
#main {
  color: black;
  a {
    font-weight: bold;
    &:hover { color: red; }
  }
}
```

컴파일 되는 CSS입니다.

```css
#main {
  color: black; }
  #main a {
    font-weight: bold; }
    #main a:hover {
      color: red; }
```

# 과제

`button` 요소에 color: black 스타일을 추가하고, `&`와 `:focus`를 사용하여 focus 될 경우에, color: red가 반영되도록 만들어 보세요.
