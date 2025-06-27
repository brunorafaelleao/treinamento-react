import React, { use } from "react";
import { useState } from "react";
import "./TodoApp.css";

const TodoApp = () => {
  //lista de tarefas
  const [todos, setTodos] = useState([]);

  // estado de texto da tarefa
  const [inputValue, setInputValue] = useState("");

  // add tarefa
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="title">Lista de Tarefas</h1>

      {/*Formulario para adicionar tarefas */}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add uma tarefa" value={inputValue} />
      </form>

      {/* Lista de tarefas */}

      {todos.length === 0 && <p className="empty">Você não tem tarefas</p>}
    </div>
  );
};

export default TodoApp;
