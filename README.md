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
* `document.all[7]` - get 7-th element. (You do not want to use it, only for fun). Position of element may change, it cannot be used as constant identifier.
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
* `element.nodeType` - a type of a DOM node.
  * 1 - `Element` node.
  * 3 - `Text` node.
  * 8 - `Comment` node.
  * 9 - `Document` node / root node.
  * 10 - `DocumentType` node. This one --> `<!DOCTYPE html>`;
  * 11 - `DocumentFragment` node. Created by `new DocumentFragment()` and exists temporary until a fragment is attached to the DOM.

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
It is possible to create any html element using function `document.createElement`.
And add a new element to a DOM using `element.appendChild`.

Code below
```js
// create a new `<div>` element
var newDiv = document.createElement('div');
// set an id
newDiv.id = 'divId'
// set a class
newDiv.className = 'divClass';
// set an attribute
newDiv.setAttribute('attribute', 'value');
// change css style
newDiv.style.backgroundColor = 'dodgerBlue'
newDiv.style.color = 'white';
// add a margin-top
newDiv.classList.add('p-2');
// add an inner text (Option 1)
// better to avoid, it will overwrite all child nodes with one new text node
// newDiv.innerText = 'new div is here';
// add an inner text (Option 2)
{
  // create a text node
  var newDivText = document.createTextNode('new text node');
  // append a text node to a div node
  newDiv.appendChild(newDivText);
}
// add the div node to DOM element
{
  // get div with id `main`
  var mainDiv = document.querySelector('div#main');
  // append a child to this div
  mainDiv.appendChild(newDiv);
}
// print out a new element
console.log(newDiv);
```
will add a new element after `ul` element and output new element in a console.

### 2.3. Injecting Elements with `appendChild`
`element.appendChild(newChildElement)` will add a `newChildElement` as the last child, if `newChildElement` was already a child of an `element` it will be moved down and set to position of a last child.
```js
// get second `li` inside of `ul`
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// move it to the bottom of `ul`
secondItem.parentElement.appendChild(secondItem);
// print out the element
console.log(secondItem);
```

### 2.4. Clone and `insertBefore` an Original
```html
<h2 class="title">
  <span>Add</span>
  Items
  <!-- Comment -->
</h2>
```
```js
// get `h2` with `title` id
var itemsTitle = document.querySelector('h2.title'); // returns Element
// create a deep copy of a node
var itemsTitleCopy = itemsTitle.cloneNode(true); // returns Node
// replacing an id
itemsTitleCopy.setAttribute('id', 'new-id');
// create a text node
var copyTextNode = document.createTextNode(' (Copy)');
// add a text node to a copy
itemsTitleCopy.appendChild(copyTextNode);
// insert copy before the original node
itemsTitle.parentNode.insertBefore(itemsTitleCopy, itemsTitle);
// print out both elements
console.log(itemsTitle);
console.log(itemsTitleCopy);
```

## 3. Events
Let's add a button first, add some lines after `ul` element.
```html
</ul>
<br>
<button class="btn btn-info btn-block" id="button">Click Here</button>
```
You could use emmet abbreviation for a button - type `button.btn.btn-info.btn-block#button` and click tab to resolve it.

### 3.1 Adding an Event Listener
We add a simplest event lister `onClick` which is raised when button is clicked.

In the past
* it was easy to simply put the function inside of an event definition.
```html
<button onclick="alert('ohh nooo!');" class="btn btn-info btn-block"
```
* Or you can set it to a function and define it in separate .js file.
```html
<button onclick="onButtonClick(1)" class="btn btn-info btn-block"
```

But now code is usually separated from a view. And somewhere in code you can query an element and add an event listener to it like shown below.
```js
var button = document.getElementById('button');
button.addEventListener('click', onEvent);

function onEvent() {
  console.log('Button clicked');
}
```
This is an appropriate way of doing things.

### 3.2. Event Object Properties
Event object contains a lot of information about event itself.
Here are some useful examples.
```js
var button = document.getElementById('button');
button.parentElement.addEventListener('click', onEvent);

function onEvent(e) {
  // print out event properties
  console.log(e);
  // print out event target
  console.log(e.target);
  // print out a type of event
  console.log(e.type);
  // print out vertical distance between top edge of html page and mouse position
  console.log(e.clientY);
  // print out horizontal distance between left edge of html page and mouse position
  console.log(e.clientX);
  // print out vertical distance between top edge of `e.target` and mouse position
  console.log(e.offsetY);
  // print out horizontal distance between left edge of `e.target` and mouse position
  console.log(e.offsetX);
  // print out 'if `Alt / Ctrl / Shift` was pressed when button was clicked`
  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);
}
```

### 3.3. Mouse Click Events
```js
var button = document.getElementById('button');
// add event listeners

// usual `click`
button.parentElement.addEventListener('click', onEvent2);
// double click
button.parentElement.addEventListener('dblclick', onEvent2);
// mouse button is pressed down (is may be also never released)
button.parentElement.addEventListener('mousedown', onEvent2);
// mouse button is released
button.parentElement.addEventListener('mouseup', onEvent2);

// define delegate
function onEvent2(e) {
  console.log('Event type is "' + e.type + '"');
}
```

### 3.4. Mouse Movement Events
Add following layout items:
```html
<div class="card" id="smallCard" style="width:255px;height:255px">
  <h2>Hello</h2>
</div>
```
```js
var div = document.getElementById('smallCard');
// add event listeners

// Event is raised when mouse is moved inside of an element area
div.addEventListener('mouseenter', onEvent3);
// Event is raised when mouse is moved outside of an element area
div.addEventListener('mouseleave', onEvent3);

// Event is raised when mouse is moved inside of an element area or subelement area
div.addEventListener('mouseover', onEvent3);
// Event is raised when mouse is moved outside of an element area or subelement area
div.addEventListener('mouseout', onEvent3);

// define delegate
function onEvent3(e) {
  console.log('Event type is "' + e.type + '"');
}
```

### 3.5. `mousemove` Color Picker
```js
var div = document.getElementById('smallCard');
// add event listeners

// Event is raised when mouse is moved somehow above an element area
div.addEventListener('mousemove', onEvent4);

// define delegate
function onEvent4(e) {
  div.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 100)";
  div.firstElementChild.innerHTML =
    "red : " + e.offsetX + "<br>" + "green: " + e.offsetY;
}
```

### 3.6. Keyboard and Input[type="text"] Events
Please test this events independently.
```js
// Input events
var input = document.querySelector('input[type="text"]');
var h2 = document.querySelector('div#smallCard h2');

// is going to run when you're pressed a key (in this case it will provoke an input delay in one character)
input.addEventListener('keydown', onEvent5);
// is going to run when you're release a key (in this case it will not provoke an input delay in one character)
input.addEventListener('keyup', onEvent5);
// is going to run when you're pressed a key (in this case it will provoke an input delay in one character)
input.addEventListener('keypress', onEvent5);

// An event is fired when you click somewhere inside of an element, navigate to it with `tab`, so focus an element somehow.
input.addEventListener('focus', onEvent5);
// An event is fired when you click somewhere outside of a focused element, navigate away from it with `tab`, so focus moves somewhere else.
input.addEventListener('blur', onEvent5);

// an event is fired when you cut some text with `Ctrl+X` or right click --> cut
// `e.target.value` stores cut text
input.addEventListener('cut', onEvent5);
// an event is fired when you paste some text with `Ctrl+V` or right click --> paste
input.addEventListener('paste', onEvent5);

// Any change of value of input will provoke this event (editing, cutting, pasting)
input.addEventListener('input', onEvent5);

function onEvent5(e) {
  // get type of an event
  console.log('Event type: ' + e.type);
  // get current value of input
  h2.innerHTML = e.target.value;
}
```

### 3.7. Select Events
```html
<div class="form-group">
  <label for="select-option-input">Select an option</label>
  <select class="form-control" id="select-option-input">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
</div>
```
```js
var select = document.querySelector('select');
var h2 = document.querySelector('div#smallCard h2');
// An event is raised when some option is chosen, `e.target.value` stores a value assigned to an option.
select.addEventListener('change', onEvent6);
// same as above
select.addEventListener('input', onEvent6);
function onEvent6(e) {
  // get type of an event
  console.log('Event type: ' + e.type);
  // get current value of input
  h2.innerHTML = e.target.value;
}
```

### 3.8. `Submit` Event
```js
var form = document.querySelector('form');
var h2 = document.querySelector('div#smallCard h2');
// fires when form button with `type=submit` is clicked
form.addEventListener('submit', onEvent7);
// event delegate
function onEvent7(e) {
  // prevent default behavior (defined by `submit` button type)
  e.preventDefault();
  // get type of an event
  console.log('Event type: ' + e.type);
  // get current value of input
  h2.innerHTML = e.target.value;
}
```