let fome = document.querySelector('#task-fome');
let taskList = document.querySelector('.collection');
let clearBtn = document.querySelector('clear-tasks');
let filter = document.querySelector('#filter');
let taskInput = document.queryselector('#task');


// Load all event lisnear
loadEventListeners()
  // Add task event

  function loadEventListeners() {
    fome.addEventListener('submit', addTask);
  }

 function addtTask(e) {
      if(taskInput.value=== ''){
         alert('enter the content');
      }

      e.preventDefault();
  }



