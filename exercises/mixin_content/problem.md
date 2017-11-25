# MIXIN CONTENT

Passing Content Blocks to a Mixin

It is possible to pass a block of styles to the mixin for placement within the styles included by the mixin. The styles will appear at the location of any `@content` directives found within the mixin. This makes it possible to define abstractions relating to the construction of selectors and directives.

For example:

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

Generates:

```css
.colors {
  background-color: blue;
  color: white;
  border-color: blue;
}
```

Note: when the `@content` directive is specified more than once or in a loop, the style block will be duplicated with each invocation.

# EXERCISE

Modify the `border-thickness` mixin from the previous exercise to also accept a `@content`, and invoke it by passing in a rule that sets the `border-style` of the `img` element to `solid`.
