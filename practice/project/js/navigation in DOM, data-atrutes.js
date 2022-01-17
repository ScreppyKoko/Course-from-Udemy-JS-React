'use strict';

console.log(document.head);
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.firstChild);
console.log(document.body.lastChild);

console.log(document.querySelector('.promo__genre').parentNode.parentNode);
console.log(document.querySelector('.promo__genre').parentElement);
console.log(document.querySelector('[data-current="1"]').nextSibling);
console.log(document.querySelector('[data-current="1"]').previousSibling);
console.log(document.querySelector('[data-current="1"]').nextElementSibling);
console.log(document.querySelector('[data-current="1"]').previousElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}