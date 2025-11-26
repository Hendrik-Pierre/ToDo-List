
const todoList = document.getElementById("todos");

const button = document.getElementById("addBtn");

const input = document.getElementById("input");

button.addEventListener("click", (event) => addTodo(event));

let todos = [];
let currentId = 0;

function addTodo(event) {

    event.preventDefault();

    const todo = {
        id : currentId + 1,
        task : input.value,
        completed : false
    };

    todos.push(todo)
    currentId += 1;  

    input.value = "";
    renderList()
}

function renderList() {

    todoList.innerHTML = "";
    
    todos.forEach(todo => {

        todoList.innerHTML += `
            <li id="${todo.id}" class="${todo.completed ? "completed todo" : "todo"}">
                <span>${todo.task}</span>
                <button>❌</button>
            </li>
        `

    })
    console.log(todos)
}


todoList.addEventListener('click', function(event) {
        console.log(event.target);

        if(event.target.tagName == "SPAN"){
            toggleTodoCompletion(event.target.parentElement.id)
        } else if(event.target.tagName == "BUTTON"){
            deleteTodo(event.target.parentElement.id)
        }
});

function toggleTodoCompletion(id) {
    const item = todos.find(i => i.id == id)
    if (item.completed){
        item.completed = false;
    }
    else {
        item.completed = true;
    }
    renderList()
}

function deleteTodo(id) {

    const item = todos.find(i => i.id == id)
   
    todos = todos.filter(todo => todo != item)
    renderList();
}