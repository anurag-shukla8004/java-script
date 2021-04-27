let element = document.createElement('li');


//add a class name and id 
element.className = 'childul';
element.id = 'cratedLi';
element.setAttribute('title','mytitle');
element.innerText = 'this is my word';


ul = document.querySelector('ul.this');

ul.appendChild(element)


let elem2 = document.createElement('h3')

elem2.className = 'elem2';
elem2.id = 'elem2';
elem2.innerText = 'topic ans subject';

element.replaceWith(elem2);

