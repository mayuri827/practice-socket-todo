const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    desc: { type: String, required: true },
    priority: { type: String, required: true },
    hero: { type: String, required: true },
    complete: { type: Boolean, default: false },

})
module.exports = mongoose.model("todo", todoSchema)