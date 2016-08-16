# EACH ITERATOR

The `@each` directive usually has the form `@each $var in <list or map>`. `$var` can be any variable name, like `$length` or `$name`, and `<list or map>` is a SassScript expression that returns a list or a map.

The `@each` rule sets `$var` to each item in the list or map, then outputs the styles it contains using that value of `$var`. For example:

```scss
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}
```

is compiled to:

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

# EXERCISE

Write a Sass script that generates rules for the selectors `.#{$big-cat}-picture`, where `$big-cat` is one of 'cheetah', 'puma', 'jaguar', 'panther', 'tiger', 'leopard', and sets its `padding` to '3em'.
