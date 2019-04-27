# Vanilla JS DOM manipulation
Based on [video series](https://www.youtube.com/watch?v=0ik6X4DJKCc).

## 0. Preparation
### 1. Live Reloading Server
Get plugin called `live server` for vscode.

### 2. Intellisence for CSS
* [stackoverflow](https://stackoverflow.com/questions/35213941/how-to-add-intellisense-to-visual-studio-code-for-bootstrap)

## 1. DOM Structure
Let's get a document structure, type in console in DevTools or in `dom.js` (it is included in html, so it will be executed at the end of page loading).
```js
console.dir(document);
```
A lot of stuff, right? We'll skip the most of it.

### 1.1. Minimal DOM
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

### 1.2. Useful Document Props (Perhaps)
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

### 1.3. Useful Element Props (Perhaps)
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

### 1.4. Useful Element Methods (Perhaps)
* `element.append()` / `element.appendNode()` - add new child (if such child already exists then moves it from current position to the last child position).

### 1.5. Native Selectors
There are a couple of different selectors:
* `document.getElementById(id)` - returns a first matching element with defined `id` attribute. (In valid HTML there should be only one element with unique `id`).
* `document.getElementsByClassName(cssClass)` - return a HTMLCollection of matches (not array, no `.forEach`).
* `document.getElementsByTagName(htmlTag)` - return a HTMLCollection of matches (not array, no `.forEach`).
* `document.querySelector(cssSelector)` - returns a first matching element with fitting to  `cssSelector`. Work pretty much like `jQuery(cssSelector)`.
* `document.querySelectorAll(cssSelector)` - returns all matching elements as `NodeList`. `NodeList` is almost the same as `HTMLCollection`, except we can iterate this list.

#### 1.5.1. CSS Selectors
`cssSelector`  can be presented by:
  * Simple selectors:
    * [MDN reference](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Simple_selectors)
    * `#id` - identifier;
    * `h1` - tag;
    * `.someClass` - element with `class="someClass"`;
  * Attribute selectors:
    * [MDN reference](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors)
    * `input[type="submit"]` - get `input` element by tag where attribute `type` has value `submit`. Check how it works with several attributes or with class or with id or without tag.
  * Pseudo classes and pseudo elements
    * [MDN reference](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements)
    * `.someClass:lastChild` - searches for a first parent element which contains at least one child with `.someClass` and matches the last child. (If further is available one more parent with one or several child elements of `.someClass`, the last one of them is not matched).
    * `.someClass:nth-child(3)` - get third child.
    * `.someClass:nth-child(odd)` - get odd child.
    * `.someClass:nth-child(even)` - get even child.

## 2. Traversing DOM
### 2.0. Elements Relationships
* Some node may have a child node.
* Some node may have a parent node.
* If node A contains child nodes A1 & A2 then they are siblings.
* If node A contains child node A1 and A1 contains another child node A11 then A1 & A11 are descendants of A.
  * In the same situation A & A1 are ancestors of A11.

### 2.1. Querying Elements
#### 2.1.1. Accessing Parent
```html
<div id="main" class="card card-body">
  <h2 class="title">Add Items</h2>
  <!-- ... -->
</div>
```
```js
var itemList = document.querySelector('h2.title');
console.log(itemList.parentNode);
```
So use can use property `.parentNode` to access a parent node. Or use `.parentNode.parentNode` to access grandparent node.
The same way you can use `.parentElement`.

#### 2.1.2. Accessing All Children
```html
<ul id="items" class="list-group">
  <li class="list-group-item">Item 1</li>
  <li class="list-group-item">Item 2</li>
  <li class="list-group-item">Item 3</li>
  <li class="list-group-item">Item 4</li>
</ul>
```
```js
var itemList = document.querySelector('#items');
console.log(itemList.childNodes);
console.log(itemList.children);
```
So `.children` returns all html elements - 4 `li` contained inside of `ul`, but `.shildNodes` returns also all text contained between `ul` and `li`, `li` and `li`, `li` and `ul`, in this example it is all newline characters, but it also could be any text contained between html elements. \
So if you remove all text like below
```html
<ul id="items" class="list-group"><li class="list-group-item">Item 1</li><li class="list-group-item">Item 2</li><li class="list-group-item">Item 3</li><li class="list-group-item">Item 4</li></ul>
```
then result of both properties will match.

#### 2.1.3. Accessing Last Child
```html
<ul id="items" class="list-group">
  <li class="list-group-item">Item 1</li>
  <li class="list-group-item">Item 2</li>
  <li class="list-group-item">Item 3</li>
  <li class="list-group-item">Item 4</li>
</ul>
```
```js
var itemList = document.querySelector('#items');
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
```
* `lastChild` - returns either text node or html element.
* `lastElementChild` - returns html element.

#### 2.1.4. Accessing First Child
```html
<ul id="items" class="list-group">
  <li class="list-group-item">Item 1</li>
  <li class="list-group-item">Item 2</li>
  <li class="list-group-item">Item 3</li>
  <li class="list-group-item">Item 4</li>
</ul>
```
```js
var itemList = document.querySelector('#items');
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
```
* `lastChild` - returns either text node or html element.
* `lastElementChild` - returns html element.


#### 2.1.5. Accessing Following Sibling
```html
<ul id="items" class="list-group">
  <li class="list-group-item">Item 1</li>
  <li class="list-group-item">Item 2</li>
  <li class="list-group-item">Item 3</li>
  <li class="list-group-item">Item 4</li>
</ul>
```
```js
var firstListItem = document.querySelector('.list-group-item:first-child');
console.log(firstListItem.nextSibling);
console.log(firstListItem.nextElementSibling);
```
* `nextSibling` - returns either text node or html element.
* `nextElementSibling` - returns html element.

#### 2.1.6. Accessing Previous Sibling
```html
<ul id="items" class="list-group">
  <li class="list-group-item">Item 1</li>
  <li class="list-group-item">Item 2</li>
  <li class="list-group-item">Item 3</li>
  <li class="list-group-item">Item 4</li>
</ul>
```
```js
var firstListItem = document.querySelector('.list-group-item:nth-child(3)');
console.log(firstListItem.previousSibling);
console.log(firstListItem.previousElementSibling);
```
* `previousSibling` - returns either text node or html element.
* `previousElementSibling` - returns html element.

### 2.2. Creating Elements

