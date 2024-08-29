const { createTodo, ReadTodo, UpdeteTodo, DeleteTodo } = require("../controllers/todo.contoller")

const router = require("express").Router()

router
    .get("/", ReadTodo)
    .post("/add", createTodo)
    .put("/updete/:id", UpdeteTodo)
    .delete("/delete/:id", DeleteTodo)

module.exports = router