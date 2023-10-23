var list = document.getElementsByTagName('ul')[0];
var newItemLast = document.createElement('li');
var newTextLast = document.createTextNode('TaiVoiAnCut');
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('Taivoingu');
newItemFirst.appendChild(newTextFirst);
var newE = document.getElementsByTagName('ul')[0];
newE.insertBefore(newItemFirst, newE.childNodes[0]);

var listItems = document.querySelectorAll('li');
var i;
for (i = 0; i < listItems.length; i++) {
    listItems[i].className = 'cool';
}

var header = document.querySelector('h1');
var headerText = header.firstChild.nodeValue;
var totalItems = listItems.length
var newHeader = headerText + ' ' + '<span>' + totalItems + '</span>';
header.innerHTML = newHeader;