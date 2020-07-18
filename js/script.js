
// const  todoInput = document.querySelector('[data-input]');
//     console.log(todoInput)

// const myInput = document.querySelector('.todo__input');
//     console.log(myInput)
//     console.log(myInput.dataset)

// selectors
const todoInput = document.querySelector('.todo__input');
const todoBtn = document.querySelector('.todo__button');
const todoList = document.querySelector('.todo-list');
const filterList = document.querySelector('.select__filter');
const zmienna = document.querySelector('.todo-container__list')



// event listeners
    todoBtn.addEventListener('click', addTodo);
    todoList.addEventListener('click', deleteAndCheck);
    // filterList.addEventListener('click', filterTodo);

    function addTodo(event) {
        // prevent from submitt
        event.preventDefault();
        // create div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo-section"); //todo

        // li
        const newTodo = document.createElement("li");
        newTodo.classList.add("todo-section__item");//to-item
        newTodo.innerText = todoInput.value;
        todoDiv.appendChild(newTodo);
        todoList.appendChild(todoDiv)
        //check 
        const completedBtn = document.createElement('button');
        completedBtn.innerHTML ='<i class="fas fa-check"></i>';
        completedBtn.classList.add('todo__button--btncomplete');//delete btn
        completedBtn.classList.add('todo__button');//delete btn
        todoDiv.appendChild(completedBtn);
        // trach
        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML ='<i class="fas fa-trash"></i>';
        deleteBtn.classList.add('todo__button--btndelete');//compleated btn
        deleteBtn.classList.add('todo__button');//compleated btn
        todoDiv.appendChild(deleteBtn);
        // append 
        todoList.appendChild(todoDiv)
        todoInput.value = "";

    }
    

    function deleteAndCheck(event) {
        const item = event.target
        const parent = item.parentNode
        if(item.classList.contains('todo__button--btndelete')) {
            parent.classList.add('fall')
            parent.addEventListener('transitionend', () => {
                parent.remove();
            });
            // item.parentNode.remove();
        }
        if(item.classList.contains('todo__button--btncomplete')){
            parent.classList.toggle("completed")
        }
    }   

    function filterTodo(event){
        const todos = todoList.childNodes;
        todos.forEach(function(todo){
            console.log(todo)
            switch(event.target.value){
                case "all":
                    todo.classList.add('display_flex')
                    break;
                case "completed":
                    if (todo.classList.contains("completed")) {
                        todo.classList.add('display_flex'); 
                    }
                    else {
                        todo.classList.add('none');
                    }
                    
            }
        });
    }

// it's working  :) 

    // function count (event) {
    //     event.preventDefault();
    //     console.log('hhh')
    // zmienna.insertAdjacentHTML('afterend', getTemplate())
    // }

    // function getTemplate() {
        
    //     return `<div class="todo-continer__section ">
    //     <li class="todo-container__item ">dhfggggg</li>
    //     <button class="todo-container__btndelete" data-button-delete></button>
    //     <button class="todo-container__btncomplete" data-button-complete></button>
    // </div>`
    // }
