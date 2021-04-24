console.log('this is tute 16');

let element = document.createElement('li');

element.className = 'new-list';
element.id = 'new-id';
element.innerText = 'I am web dev'

let ul = document.querySelector('ul.this');
ul.appendChild(element)
console.log(ul);

console.log(element);


let elem2 = document.createElement('h3');
elem2.id = 'heading';
elem2.className = 'heading';
elem2.innerText = 'haii every buddy is present' ;

let cont = document.createTextNode('I will be go to my roomś');

elem2.appendChild(cont)


let rep = document.getElementById('this');

rep.replaceChild(element, document.getElementById('myid'));

console.log(rep );