import { todoForm } from "./TodoForm.js";
import { todoContainer } from "./TodoList.js";

window.onload = () => {
  console.log("hello world");
  const root = document.querySelector("#root");
  const m = new Map();
  m.set("a", 1);
  root.appendChild(todoForm);
  root.appendChild(todoContainer);
};
