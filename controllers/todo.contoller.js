const asynHandler = require("express-async-handler")
const Todo = require("../models/Todo")
const { io } = require("../socket/socket")



exports.createTodo = asynHandler(async (req, res) => {
    await Todo.create(req.body)
    const result = await Todo.find()
    io.emit("todo-create-response", result)

    res.json({ message: "CreateTodo successfully" })
})
exports.ReadTodo = asynHandler(async (req, res) => {
    const result = await Todo.find()
    res.json({ message: " ReadTodo successfully", result })
})
exports.UpdeteTodo = asynHandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: " UpdeteTodo successfully" })
})
exports.DeleteTodo = asynHandler(async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: " DeleteTodo successfully" })
})