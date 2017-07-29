# EACH 반복문

`@each` 지시어는 보통 `@each $var in <list or map>`의 형식으로 사용됩니다. `$var`는 어떠한 변수나 들어갈 수 있습니다. `$length`, `$name`같은 변수가 들어갈 수 있으며 `<list or map>`과 같이 리스트나 맵을 반환하는 Sass 스크립트 표현도 가능합니다.

`@each`는 리스트나 맵의 각각의 항목에 `$var`를 할당하여, `$var`가 가진 값을 이용해 스타일을 출력합니다. 예를 보시죠.

```scss
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
```

컴파일되는 CSS입니다.

```css
.puma-icon {
  background-image: url('/images/puma.png'); }
.sea-slug-icon {
  background-image: url('/images/sea-slug.png'); }
.egret-icon {
  background-image: url('/images/egret.png'); }
.salamander-icon {
  background-image: url('/images/salamander.png'); }
```

# 과제

`@each`를 사용해서 선택자들을 생성하는 Sass 스크립트를 한 번 만들어 보세요. 선택자의 이름은 `.#{$big-cat}-picture`의 형식으로 `$big-cat`에는 'cheetah', 'puma', 'jaguar', 'panther', 'tiger', 'leopard'가 들어가야 합니다. 그리고 모든 선택자에 '3em'값을 가진 `padding` 스타일을 설정하세요.
