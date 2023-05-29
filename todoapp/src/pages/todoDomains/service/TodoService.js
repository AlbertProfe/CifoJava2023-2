import axios from "axios";

///`${API_URL}/todo`
// https://github.com/mockapi-io/docs/wiki/Quick-start-guide
// API_URL mockapi.io
const API_BASE_URL = "https://645fbe78ca2d89f7e74cf4c9.mockapi.io/v1";

const TodoService = {
  getAllTodos: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/todo`);
      //console.log("retrieving todos:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error retrieving todos:", error);
      throw error;
    }
  },

  createTodo: async (todo) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/todo`, todo);
      return response.data;
    } catch (error) {
      console.error("Error creating todo:", error);
      throw error;
    }
  },

  updateTodo: async (todo) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/todo/${todo.id}`, todo);
      return response.data;
    } catch (error) {
      console.error("Error updating todo:", error);
      throw error;
    }
  },

  deleteTodo: async (todoId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/todo/${todoId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting todo:", error);
      throw error;
    }
  },
};

export default TodoService;
