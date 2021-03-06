![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square) <img src="https://img.shields.io/github/v/release/manadaym/util-web-components"> <a href="https://raw.githubusercontent.com/ManadayM/util-web-components/master/LICENSE"><img src="https://img.shields.io/npm/l/util-web-components"></a>
<img src="https://img.shields.io/bundlephobia/minzip/util-web-components"> <img src="https://img.shields.io/npm/dt/util-web-components">

# Utility Web Components 🛠

A collection of web components built for reusability and performance.

## Components

We will gradually add useful components under this project. You can find detailed documentation for each component into its respective directory. Please click on a component's tag/name in the table below, it should take you to the `READEME` page of that respective component.

| Sr. No. | Tag | Descritpion |
| --- | --- | --- | 
| 1. | [uc-image](src/components/uc-image/readme.md) | Lazy load images on all browsers including IE11. |

## Package size

You don't need to worry about the package size as it will only download the components that you have used on your page. 🤩

## Usage

This components collection is based on "differential bundling" strategy. The advantage of differential bundling is that modern browsers can avoid all the polyfills and bloated legacy JavaScript, and use the modern APIs already baked into the browser.

For example, the modern browsers will only download `util-components.esm.js` as they out-of-the-box support latest JavaScript features like ES Modules, async/await, Classes, etc. For IE11, it will download the `util-components.js` file which is in the ES5 syntax and has all the polyfills.

### Script tag

- Put script tags as shown above in the `head` of your web page.
- Then you can use the custom elements anywhere in your template, JSX, html etc.

#### Unpkg CDN

```html
<script type="module" src="https://unpkg.com/util-web-components/dist/util-components/util-components.esm.js"></script>
<script nomodule src="https://unpkg.com/util-web-components/dist/util-components/util-components.js"></script>
```

#### jsDelivr CDN

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/util-web-components/dist/util-components/util-components.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/util-web-components/dist/util-components/util-components.js"></script>
```

## Examples

Please check `examples` directory for a sample usage. You can locate an example for each component at `examples/<component-tag>/index.html`.
