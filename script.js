
let form = document.querySelector('#task-form');
let taskList = document.querySelector('.collection');
let clearBtn = document.querySelector('clear-tasks');
let filter = document.querySelector('#filter');
let taskInput = document.querySelector('#task');



// Load all event lisnear
loadEventListeners();
  // Add task event

  function loadEventListeners() {
    form.addEventListener('submit', addTask);
  }

 function addTask(e) {
      if(taskInput.value === ''){
         alert('enter the content');
      }

      // create an element 

      let li = document.createElement('li');

      li.className = 'collection-item';
      
      e.preventDefault();
  }


  


