# FOR 반복문

`@for` 지시어는 일련의 스타일을 반복해서 출력합니다. 반복마다 카운터 변수를 사용해서 출력을 조정합니다. 지시어는 두 가지의 형태가 있습니다. `@for $var from <start> through <end>`와 `@for $var from <start> to <end>`입니다. `through`와 `to`의 차이점에 주의하세요. `$var`는 `$i`와 같이 어떤 변수도 들어갈 수 있습니다. `<start>`와 `<end>`는 항상 정수를 반환하는 Sass 스크립트입니다. `<start>`가 `<end>`보다 큰 값이 지정되면, 카운터 변수는 반복마다 증가 대신 감소합니다.

`@for`문은 `$var`에 지정한 범위 내의 연속된 숫자들을 할당하여, 반복마다 `$var`의 값을 사용하여 중첩된 스타일을 지정합니다. `from ... through`의 형식의 경우 `<start>`와 `<end>`의 값을 포함하지만, `from ... to`의 형식인 경우 `<end>`의 값은 포함되지 않습니다. 다음은 `through`를 사용한 경우입니다.

```scss
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}
```

컴파일되는 CSS입니다.

```css
.item-1 {
  width: 2em; }
.item-2 {
  width: 4em; }
.item-3 {
  width: 6em; }
```

# 과제

`@for` 지시어를 사용하여 `h1`부터 `h6`까지의 요소를 만드세요. 각 요소는 `font-size` 스타일을 갖고 있고 값은 `24px`에서 `3px` 곱하기 헤딩 레벨의 숫자를 뺀 값입니다. 예를 들어 헤딩 레벨이 `h1` 이라면 `font-size`의 값은 `24px - 3px * 1`가 되어 `21px`가 할당됩니다.
