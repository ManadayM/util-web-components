# uc-image

We often see browser loads tons of offscreen images when we load a webpage. This contributes to higher data-usage and slower page load times. The modern browsers like Chrome and Firefox supports native lazy loading out-of-the-box.

The `uc-image` component can be used to defer loading the images on all browsers, including the legacy ones. It checks for the [native lazy loading](https://caniuse.com/loading-lazy-attr) support. It fallbacks to [IntersectionObserver](https://caniuse.com/intersectionobserver) when native lazy loading is not supported by the browser. The IntersectionObserver API is pollyfilled for the Jurassic Era browsers like `IE11`.

The component internally uses `picture` element. You can supply `source` nodes for the `Art Direction` as a slotted content. We haven't polyfilled the `picture` element so it will always fallback on to the `img` tag inside it on legacy browsers.

## Usage

### Minimum required markup

```html
<uc-image src="https://placekitten.com/400/400"></uc-image>
```

### Other optional attributes

```html
<uc-image src="https://placekitten.com/400/400" width="400" height="400" alt="A cute kitten" class="lazy-image"></uc-image>
```

### Example of `img[srcset]`

```html
<uc-image src="https://developer.mozilla.org/static/img/favicon72.png" srcset="https://developer.mozilla.org/static/img/favicon144.png 2x" alt="MDN logo" width="410" height="410"></uc-image>
```

### Example of `img[sizes]`

```html
<uc-image src="https://media.prod.mdn.mozit.cloud/attachments/2019/08/29/16864/c77b83ecdb4ce4a6507da42aa7e8585e/clock-demo-200px.png" srcset="https://media.prod.mdn.mozit.cloud/attachments/2019/08/29/16864/c77b83ecdb4ce4a6507da42aa7e8585e/clock-demo-200px.png 200w, https://media.prod.mdn.mozit.cloud/attachments/2019/07/15/16797/4c169938d5f923bfa4db5ee937f24ebe/clock-demo-400px.png 400w" sizes="(max-width: 600px) 200px, 50vw" alt="Clock">
</uc-image>
```

### Source nodes for Art Direction

Here, the `source` node will be rendered as a slotted content of the `picture` element. The attributes set on the `uc-image` tag will be applied to the `img` tag inside the `picture` element.

```html
<uc-image src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/painted-hand-298-332.jpg" width="415" height="415">
  <source srcset="https://interactive-examples.mdn.mozilla.net/media/cc0-images/surfer-240-200.jpg" media="(min-width: 800px)">
</uc-image>
```

<!-- Auto Generated Below -->


## Properties

| Property               | Attribute | Description                                                               | Type               | Default     |
| ---------------------- | --------- | ------------------------------------------------------------------------- | ------------------ | ----------- |
| `dataAlt`              | `alt`     | Image alt text.                                                           | `string`           | `undefined` |
| `dataClass`            | `class`   | CSS class(es) to be added on the <img> tag inside the <picture> element.  | `string`           | `undefined` |
| `dataHeight`           | `height`  | Image height.                                                             | `number \| string` | `undefined` |
| `dataSizes`            | `sizes`   | sizes for img tag.                                                        | `string`           | `undefined` |
| `dataSrc` _(required)_ | `src`     | Image URL. The value of this prop will be set on img tag's src attribute. | `string`           | `undefined` |
| `dataSrcset`           | `srcset`  | srcset for img tag.                                                       | `string`           | `undefined` |
| `dataWidth`            | `width`   | Image width.                                                              | `number \| string` | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
