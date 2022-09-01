const todoControl = document.querySelector('.todo-control'),
  headerInput = document.querySelector('.header-input'),
  todoList = document.querySelector('.todo-list'),
  todoCompleted = document.querySelector('.todo-completed');
  const toDoData = [];
let li = document.createElement('li');
  
let todoItem, todoItemJSON, todoLOcalStorage;

const replacer = function(obj) {
    localStorage.clear();
    obj.completed = !obj.completed
    render()
    localStorage.setItem('Verst', JSON.stringify(toDoData));
}

const clickDel = function(index) {
    localStorage.clear();
    li.remove();
    toDoData.splice(index, 1);
    render();
    localStorage.setItem('Verst', JSON.stringify(toDoData));
}

  const render = function () {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''
    toDoData.forEach( function(item, index) {
        li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
            `<div class="todo-buttons">` +
            `<button class="todo-remove"></button>` +
            `<button class="todo-complete"></button>` +
            `</div>`
        if (item.completed) {
            todoCompleted.append(li)
        } else {
            todoList.append(li)
        }
        
        li.querySelector('.todo-complete').addEventListener('click', function() {
            replacer(item)
        })

        li.querySelector('.todo-remove').addEventListener('click', function () {
            clickDel(index)
        })
    })
 }

  todoControl.addEventListener('submit', function (event) {
    event.preventDefault();
    localStorage.clear();
    if (headerInput.value === '') {
        return headerInput.style.background = '#CD5C5C';
    } else {
        headerInput.style.background = '';
        const newToDo = {
            text: headerInput.value,
            completed: false
        }
        toDoData.push(newToDo);
        headerInput.value = '';
        localStorage.setItem('Verst', JSON.stringify(toDoData));
        render();
    }
})


function renderStart() {
    if (localStorage.getItem('Verst')) {
        todoLOcalStorage = JSON.parse(localStorage.getItem('Verst'));
        todoLOcalStorage.forEach(function(item) {
            toDoData.push(item);
        })
        render();
    } 
    
}
renderStart()

