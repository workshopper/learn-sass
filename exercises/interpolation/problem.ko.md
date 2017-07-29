# 삽입

선택자 이름을 지정하거나 선택자 안에서도 변수를 사용할 수 있습니다. `#{}`를 삽입해서 변수가 들어갈 곳을 지정하세요. 예제를 보시죠.

```scss
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}
```

컴파일되는 CSS입니다.

```css
p.foo {
  border-color: blue; }
```

 `#{}`를 사용해서 스타일의 값을 지정할 수도 있습니다. 하지만 대부분의 경우 그냥 변수를 사용하는 것이 더 좋습니다. `#{}`를 사용함으로써의 좋은 점은 `#{}`를 둘러 싼 모든 연산이 일반 CSS로 처리된다는 것입니다. 예제를 보시죠.

```scss
p {
  $font-size: 12px;
  $line-height: 30px;
  font: #{$font-size}/#{$line-height};
}
```

컴파일되는 CSS입니다.

```css
p {
  font: 12px/30px; }
```

# 과제

문자열 'article'을 가진 변수 `$selector`를 선언하세요. 그리고 선택자의 이름에 `$selector`를 삽입하세요. 그리고 color 스타일을 추가해서 #ff0000를 할당하세요.
