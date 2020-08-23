//Selektory

const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Listenery

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Funkcje
function addTodo(e) {
    e.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //LI
    const todoLi = document.createElement('li');
    todoLi.innerText = todoInput.value;

    todoLi.classList.add('todo-item');
    todoDiv.appendChild(todoLi);
    //Przycisk Ukonczenia
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //Przycisk usuniecia
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Dodaj do listy
    todoList.appendChild(todoDiv);
    //Czyszczenie inputa
    todoInput.value = "";


}

function deleteCheck(e) {
    const item = e.target;
    //Usuwanie todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove();

    }

}