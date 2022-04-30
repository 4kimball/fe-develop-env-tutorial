const todoContainer = document.createElement("ul");
let todo = null;

const getTodoItem = (todo) => {
  const todoItem = document.createElement("li");
  todoItem.innerText = todo;

  todoContainer.appendChild(todoItem);
};

export { todoContainer, getTodoItem };
