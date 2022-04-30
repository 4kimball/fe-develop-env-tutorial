import { getTodoItem } from "./TodoList";

const todoForm = document.createElement("div");
const input = document.createElement("input");
const button = document.createElement("button");

let text = "";

todoForm.className = "todo-form";
input.value = text;
button.innerText = "submit";

todoForm.appendChild(input);
todoForm.appendChild(button);

todoForm.style.display = "flex";

const handleChange = (e) => {
  const newText = e.target.value;
  text = newText;
};

const handleClick = () => {
  getTodoItem(text);
  text = "";
  input.value = text;
};

input.addEventListener("change", handleChange);
button.addEventListener("click", handleClick);

export { todoForm };
