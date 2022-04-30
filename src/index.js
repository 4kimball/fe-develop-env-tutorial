import { todoForm } from "./TodoForm.js";
import { todoContainer } from "./TodoList.js";

window.onload = () => {
  console.log("hello world");
  const root = document.querySelector("#root");

  root.appendChild(todoForm);
  root.appendChild(todoContainer);
};
