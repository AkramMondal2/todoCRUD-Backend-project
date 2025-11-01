import express from "express";
import { createTodo, deleteTodo, getById, getTodos, updateTodo } from "../controllers/todoController.js";

const todoRoute = express.Router();

todoRoute.post('/create', createTodo);
todoRoute.get('/getTodos', getTodos);
todoRoute.delete('/deleteTodo/:id', deleteTodo);
todoRoute.get('/getById/:id', getById);
todoRoute.put('/update/:id', updateTodo);

export default todoRoute;
