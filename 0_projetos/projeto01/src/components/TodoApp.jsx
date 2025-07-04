import React, { use } from "react";
import { useState } from "react";
import "./TodoApp.css";

const TodoApp = () => {
  //lista de tarefas: constante criada com um array vazio
  const [todos, setTodos] = useState([]);

  // estado de texto da tarefa
  const [inputValue, setInputValue] = useState("");

  // add tarefa com uma constante que vai ser igual a uma arrowfunction. Ela vai ter um parâmetro que servirá de base para não enviar o formulário sem informações
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);

      setInputValue("");
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Lista de Tarefas</h1>

      {/*Formulario para adicionar tarefas */}

      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="add uma tarefa"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-button">
          Adicionar
        </button>
      </form>

      {/* Lista de tarefas */}

      {todos.length === 0 && <p className="empty">Você não tem tarefas</p>}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
