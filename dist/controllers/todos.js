"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteData = exports.updateData = exports.createData = exports.fecthData = void 0;
let todos = [];
const fecthData = (req, res, next) => {
    res.status(200).json({ todos: todos });
};
exports.fecthData = fecthData;
const createData = (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    res.status(201).json({
        message: 'Todo added.',
        todo: newTodo,
        todos: todos
    });
};
exports.createData = createData;
const updateData = (req, res, next) => {
    const params = req.params;
    const body = req.body;
    const tid = params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: body.text
        };
        return (res.status(200).json({
            message: 'Updated todo.',
            todos: todos
        }));
    }
    res.status(404).json({ message: 'Could not find todo for this ID.' });
};
exports.updateData = updateData;
const deleteData = (req, res, next) => {
    const params = req.params;
    todos = todos.filter(todoItem => todoItem.id !== params.todoId);
    res.status(200).json({
        message: 'Todo deleted.',
        todos: todos
    });
};
exports.deleteData = deleteData;
