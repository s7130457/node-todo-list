import express from "express";
import TodoController from "../controller/todoController";
const router = express.Router();

router
    .route("/todo-list")
    .get((req, res) => TodoController.listTodo(req, res))
    .post((req, res) => TodoController.addTodo(req, res))
    .put((req, res) => TodoController.updateMultiTodo(req, res))
    .delete((req, res) => TodoController.deleteMultiTodo(req, res));

router
    .route("/todo-list/:id")
    .get((req: any, res) => TodoController.getTodo(req, res))
    .put((req, res) => TodoController.updateTodo(req, res))
    .delete((req, res) => TodoController.deleteTodo(req, res))


export default router;
