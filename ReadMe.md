# **wc-button**
> A simple web component button

This is a small, simple web component button that provides a consistent look and feel. 

- It is small, just over 3k and completely self-contained
- It is simple enough to be hacked to change or fine tune behavior
- It deliberately provides a small number of useful choices
- It was inspired by [Tachyons](https://tachyons.io/) and [Shoelace](https://shoelace.style/)

This component is very small and simple. If it does not work the way you want, then it is easily hacked to make it do so, Have fun!

## Usage

To use the wc-button:
1. copy `wc-button.js` to a suitable `libs` folder
2. use a `<wc-button></wc-button>` tag as needed
3. import tag as shown below, near the bottom of the html

```html
<script type="module" src="../libs/wc-button.js"></script>
```

The `wc-button` can use most of the standard button attributes: **download, hreflang, media, ping, referrerpolicy, rel, target, type'**. It also adds the following attributes. [default]

| Attribute | Values |
| --------- | ------ |
| color | default, blank, [primary], success, info, warning, danger |
| size | small, [medium], large, huge |
| trim | square, [smooth], round |
| span | narrow, [normal], wide, extrawide |
| theme | [(none)], dark |

All of these can be changed by editing the `button.js` file.

## Use with Icon
To add an icon to the button: 
1. add `wc-icon.js` to the libs as shown above. 
2. also add `bootstrap-icons.svg` to the web root (where the html page is located).
3. Now you can use any combination of text and icons inside the button.

```html
<wc-button><wc-icon name="circle"></wc-icon></wc-button>
<wc-button>Circle<wc-icon name="circle"></wc-icon></wc-button>
<wc-button><wc-icon name="circle"></wc-icon>Circle</wc-button>
```

## Demo
Use this link : <https:dalemargel.github.io/wc-button> (sorry, github does not seem to allow external links)


