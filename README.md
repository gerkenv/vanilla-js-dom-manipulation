# Vanilla JS DOM manipulation
Based on [video series](https://www.youtube.com/watch?v=0ik6X4DJKCc).

## DOM
Document object model represented by a tree structure, containing a couple of main nodes:
```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```
That's it, every thing else is optional.

## Live Reloading Server
Get plugin called `live server` for vscode.

## Intellisence for CSS
* [stackoverflow](https://stackoverflow.com/questions/35213941/how-to-add-intellisense-to-visual-studio-code-for-bootstrap)

## DOM Strcture
Let's get a document structure, type in console in DevTools or in `dom.js` (it is included in html, so it will be executed at the end of page loading).
```js
console.dir(document);
```
A lot of stuff, right? We'll skip the most of it.

### Useful Document Props (Perhaps)
* `document.domain` - page domain / host.
* `document.URL` - a complete page URL.
* `document.title` - Content of `html > head > title`.
* `document.doctype` - type of a document.
* `document.head` - get `head` node.
* `document.body` - get `body` node.
* `document.all` - HTMLAllCollection[n] - with `n` nodes defined in html document.
* `document.all[7]` - get 7-th element. (You do not want to use it, only for fun).
* `document.forms` - get all forms of a document (HTMLCollection).
* `document.links` - get all links defined with `<a>` tag.
* `document.images` - get all links defined with `<img>` tag.

### Useful Element Props (Perhaps)
Element can be created with function `document.createElement('h4')`. Any other html tag may be specified. \
Some props:
* `element.textContent` - get / set text within element (with all sub-elements). \
  Returns `Item Lister 123` for `<h1 id="header-title">Item Lister <span style="display:none">123</span></h1>`. (Does __not__ care about style).
* `element.innerText` - get / set text within element (with all sub-elements). \
  Returns `Item Lister` for `<h1 id="header-title">Item Lister <span style="display:none">123</span></h1>`. (Does care about style).
* `element.innerHTML` - get / set html within element. (All children may be overwritten, new can be added, if you replacing `innnerHTML` then `.children` are automatically updated.)
* `element.style.cssProperty` - get / set CSS value to `property`;
* `element.children` - get / set children nodes.
* `element.className` - get / set classes of element (represented by a string).
* `element.classList` - has methods `.add` / `.remove` classes (represented by symbol table / dictionary).

### Useful Element Methods (Perhaps)
* `element.append()` / `element.appendNode()` - add new child (if such child already exists then moves it from current position to the last child position).

### Native Selectors
There are a couple of different selectors:
* `document.getElementById(id)` - returns a first matching element with defined `id` attribute. (In valid HTML there should be only one element with unique `id`).
* `document.getElementsByClassName(cssClass)` - return a HTMLCollection of matches (not array, no `.forEach`).
* `document.getElementsByTagName(htmlTag)` - return a HTMLCollection of matches (not array, no `.forEach`).