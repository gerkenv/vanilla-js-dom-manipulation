#Vanilla JS DOM manipulation
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

### Native Selectors