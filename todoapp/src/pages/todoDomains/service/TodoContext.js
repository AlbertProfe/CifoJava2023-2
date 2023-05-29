import React, { createContext, useState, useEffect } from "react";
import TodoService from "./TodoService";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  //
  useEffect(() => {
    fetchTodos();
  }, []);

  //
  const fetchTodos = async () => {
    try {
      const todos = await TodoService.getAllTodos();
      setTodos(todos);
      //console.log("todos:", todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  //
  const createTodo = async (todo) => {
    try {
      const createdTodo = await TodoService.createTodo(todo);
      setTodos((prevTodos) => [...prevTodos, createdTodo]);
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

 const updateTodo = async (todoToUpdate) => {
   try {
     const updatedTodo = {
       ...todoToUpdate,
       completed: !todoToUpdate.completed,
     };
     await TodoService.updateTodo(updatedTodo);
     setTodos((prevTodos) => {
       const updatedTodos = [...prevTodos];
       const todoIndex = updatedTodos.findIndex(
         (todo) => todo.id === updatedTodo.id
       );
       updatedTodos[todoIndex] = updatedTodo;
       return updatedTodos;
     });
   } catch (error) {
     console.error("Error updating todo:", error);
   }
 };

  //
  const deleteTodo = async (todoId) => {
    try {
      await TodoService.deleteTodo(todoId);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  //
  return (
    <TodoContext.Provider value={{ todos, createTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
