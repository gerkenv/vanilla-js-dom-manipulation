// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

// TRAVERSING THE DOM //

// // parent
// console.groupCollapsed('parent');
// var itemList = document.querySelector('h2.title');
// console.log(itemList.parentNode);
// console.log(itemList.parentElement);
// console.groupEnd();

// // children
// console.groupCollapsed('children');
// var itemList = document.querySelector('#items');
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.groupEnd();

// // last child
// console.groupCollapsed('last child');
// var itemList = document.querySelector('#items');
// console.log(itemList.lastChild);
// console.log(itemList.lastElementChild);
// console.groupEnd();

// // first child
// console.groupCollapsed('first child');
// var itemList = document.querySelector('#items');
// console.log(itemList.firstChild);
// console.log(itemList.firstElementChild);
// console.groupEnd();

// // next sibling
// console.groupCollapsed('next sibling');
// var firstListItem = document.querySelector('.list-group-item:first-child');
// console.log(firstListItem.nextSibling);
// console.log(firstListItem.nextElementSibling);
// console.groupEnd();

// // previous sibling
// console.groupCollapsed('previous sibling');
// var firstListItem = document.querySelector('.list-group-item:nth-child(3)');
// console.log(firstListItem.previousSibling);
// console.log(firstListItem.previousElementSibling);
// console.groupEnd();

// Create an element
// console.groupCollapsed('creating new element');
// // create a new `<div>` element
// var newDiv = document.createElement('div');
// // set an id
// newDiv.id = 'divId'
// // set a class
// newDiv.className = 'divClass';
// // set an attribute
// newDiv.setAttribute('attribute', 'value');
// // change css style
// newDiv.style.backgroundColor = 'dodgerBlue'
// newDiv.style.color = 'white';
// // add a margin-top
// newDiv.classList.add('p-2');
// // add an inner text (Option 1)
// // better to avoid, it will overwrite all child nodes with one new text node
// // newDiv.innerText = 'new div is here';
// // add an inner text (Option 2)
// {
//   // create a text node
//   var newDivText = document.createTextNode('new text node');
//   // append a text node to a div node
//   newDiv.appendChild(newDivText);
// }
// // add the div node to DOM element
// {
//   // get div with id `main`
//   var mainDiv = document.querySelector('div#main');
//   // append a child to this div
//   mainDiv.appendChild(newDiv);
// }
// // print out a new element
// console.log(newDiv);
// console.groupEnd();

// // Using append to move an element
// console.groupCollapsed('Moving element to a last child position');
// // get second `li` inside of `ul`
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // move it to the bottom of `ul`
// secondItem.parentElement.appendChild(secondItem);
// // print out the element
// console.log(secondItem);
// console.groupEnd();

// // Cloning and inserting an element
// console.groupCollapsed('Cloning and inserting element');
// // get `h2` with `title` id
// var itemsTitle = document.querySelector('h2.title');
// // create a deep copy of a node
// var itemsTitleCopy = itemsTitle.cloneNode(true);
// // replacing an id
// itemsTitleCopy.setAttribute('id', 'new-id');
// // create a text node
// var copyTextNode = document.createTextNode(' (Copy)');
// // add a text node to a copy
// itemsTitleCopy.appendChild(copyTextNode);
// // insert copy before the original node
// itemsTitle.parentNode.insertBefore(itemsTitleCopy, itemsTitle);
// // print out both elements
// console.log(itemsTitle);
// console.log(itemsTitleCopy);
// console.groupEnd();

// EVENT LISTENERS //
// console.groupCollapsed('Add an event listener');
// var button = document.getElementById('button');
// button.parentElement.addEventListener('click', onEvent);

// function onEvent(e) {
//   // console.log('Button clicked');
//   // example event
//     // document.getElementById('header-title').textContent = 'Changed Item Lister';
//     // document.querySelector('#main').style.backgroundColor = 'snow';
//   // print out event properties
//   console.log(e);
//   // print out event target
//   console.log(e.target);
//   // print out a type of event
//   console.log(e.type);
//   // print out vertical distance between top edge of html page and mouse position
//   console.log(e.clientY);
//   // print out horizontal distance between left edge of html page and mouse position
//   console.log(e.clientX);
//   // print out vertical distance between top edge of `e.target` and mouse position
//   console.log(e.offsetY);
//   // print out horizontal distance between left edge of `e.target` and mouse position
//   console.log(e.offsetX);
//   // print out 'if `Alt / Ctrl / Shift` was pressed when button was clicked`
//   console.log(e.altKey);
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);
// }
// console.groupEnd();

// /////////////////////////////////////////
// // Mouse click events
// console.groupCollapsed('Mouse click event types');
// var button = document.getElementById('button');
// // add event listeners

// // usual `click`
// button.parentElement.addEventListener('click', onEvent2);
// // double click
// button.parentElement.addEventListener('dblclick', onEvent2);
// // mouse button is pressed down (is may be also never released)
// button.parentElement.addEventListener('mousedown', onEvent2);
// // mouse button is released
// button.parentElement.addEventListener('mouseup', onEvent2);

// // define delegate
// function onEvent2(e) {
//   console.log('Event type is "' + e.type + '"');
// }
// console.groupEnd();

// /////////////////////////////////////////
// Mouse movement event types
// console.groupCollapsed('Mouse movement event types');
// var div = document.getElementById('smallCard');
// // add event listeners
//
// // Event is raised when mouse is moved inside of an element area
// div.addEventListener('mouseenter', onEvent3);
// // Event is raised when mouse is moved outside of an element area
// div.addEventListener('mouseleave', onEvent3);
//
// // Event is raised when mouse is moved inside of an element area or subelement area
// div.addEventListener('mouseover', onEvent3);
// // Event is raised when mouse is moved outside of an element area or subelement area
// div.addEventListener('mouseout', onEvent3);
//
// // define delegate
// function onEvent3(e) {
//   console.log('Event type is "' + e.type + '"');
// }
// console.groupEnd();

// /////////////////////////////////////////
// Color picker
// var div = document.getElementById('smallCard');
// // add event listeners
//
// // Event is raised when mouse is moved somehow above an element area
// div.addEventListener('mousemove', onEvent4);
//
// // define delegate
// function onEvent4(e) {
//   div.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 100)";
//   div.firstElementChild.innerHTML =
//     "red : " + e.offsetX + "<br>" + "green: " + e.offsetY;
// }

// /////////////////////////////////////////
// Keyboard and Input[type="text"] Events
// var input = document.querySelector('input[type="text"]');
// var h2 = document.querySelector('div#smallCard h2');
//
// // is going to run when you're pressed a key (in this case it will provoke an input delay in one character)
// input.addEventListener('keydown', onEvent5);
// // is going to run when you're release a key (in this case it will not provoke an input delay in one character)
// input.addEventListener('keyup', onEvent5);
// // is going to run when you're pressed a key (in this case it will provoke an input delay in one character)
// input.addEventListener('keypress', onEvent5);
//
// // An event is fired when you click somewhere inside of an element, navigate to it with `tab`, so focus an element somehow.
// input.addEventListener('focus', onEvent5);
// // An event is fired when you click somewhere outside of a focused element, navigate away from it with `tab`, so focus moves somewhere else.
// input.addEventListener('blur', onEvent5);
//
// // an event is fired when you cut some text with `Ctrl+X` or right click --> cut
// // `e.target.value` stores cut text
// input.addEventListener('cut', onEvent5);
// // an event is fired when you paste some text with `Ctrl+V` or right click --> paste
// input.addEventListener('paste', onEvent5);
//
// // Any change of value of input will provoke this event (editing, cutting, pasting)
// input.addEventListener('input', onEvent5);
//
// function onEvent5(e) {
//   // get type of an event
//   console.log('Event type: ' + e.type);
//   // get current value of input
//   h2.innerHTML = e.target.value;
// }

// /////////////////////////////////////////
// Select Events
// var select = document.querySelector('select');
// var h2 = document.querySelector('div#smallCard h2');
// // An event is raised when some option is chosen, `e.target.value` stores a value assigned to an option.
// select.addEventListener('change', onEvent6);
// // same as above
// select.addEventListener('input', onEvent6);
// function onEvent6(e) {
//   // get type of an event
//   console.log('Event type: ' + e.type);
//   // get current value of input
//   h2.innerHTML = e.target.value;
// }

// /////////////////////////////////////////
// Submit Events
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