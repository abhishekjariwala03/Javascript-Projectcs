let todos = [];

const addTodo = () => {
  const input = document.querySelector(".task");
  const userText = input.value.trim();

  if (userText !== "") {
    let todo = {
      text: userText,
      isCompeted: false,
    };
    todos.push(todo);
    input.value = "";
    displayTodos();
    // counterUpdate();
  }
};

// Delete Todos
const deleteTodo = (index) => {
  todos.splice(index, 1);
  displayTodos();
  counterUpdate();
};

// Display todos
const displayTodos = () => {
  let ulElim = document.querySelector(".todoList");
  ulElim.innerHTML = "";

  todos.forEach((todo, index) => {
    let listItem = document.createElement("li");

    listItem.innerHTML = `
    <input type="checkbox" class="checkbox" onchange="toggleCompeted(${index})" />
    <span class=${todo.isCompeted ? "todo - compeled" : ""}>${todo.text}</span>
    <button onclick="deleteTodo()"><i class="fa fa-trash"></i><button>
    `;
    ulElim.appendChild(listItem);
  });
};

const toggleCompeted = (index) => {
  todos[index].isCompeted = !todos[index].isCompeted;
  displayTodos();
  counterUpdate();
};

//Count Pending Todos
const counterUpdate = () => {
  let counter = document.querySelector(".pendingTodo");
  let pendingtodo = todos.filter((todo) => {
    return !todo.isCompeted;
  }).length;
  counter.textContent = pendingtodo;
};

// Delete All Todos
const deleteAll = () => {
  todos = [];
  displayTodos();
  counterUpdate();
};
