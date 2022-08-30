const todoControl = document.querySelector('.todo-control'),
  headerInput = document.querySelector('.header-input'),
  todoList = document.querySelector('.todo-list'),
  todoCompleted = document.querySelector('.todo-completed');

  const toDoData = []


  const render = function () {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''
    toDoData.forEach(function(item, index) {
        const li = document.createElement('li');
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
        
        li.querySelector('.todo-complete').addEventListener('click', function () {
            item.completed = !item.completed
            render()
        })
        li.querySelector('.todo-remove').addEventListener('click', function () {
            console.log('клик по ' + index + ' объекту:');
            
            li.remove()
            toDoData.splice(index, index)
            console.log(toDoData);
            render()
        })
    })
 }

  todoControl.addEventListener('submit', function (event) {
    
    event.preventDefault()
    if (headerInput.value === '') {
        return headerInput.style.background = '#CD5C5C'
    } else {
        headerInput.style.background = ''
        const newToDo = {
            text: headerInput.value,
            completed: false
        }
        toDoData.push(newToDo)

        headerInput.value = ''
        console.log(toDoData);
        render()
    }
    
  })


