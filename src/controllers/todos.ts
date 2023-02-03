import { Request, Response, NextFunction } from "express";
import { Todo } from "../models/todo";

let todos: Todo[] = []

type RequestBody = { text: string }
type RequestParams = { todoId: string }

export const fecthData = (req: Request, res: Response ,next: NextFunction) => {
  res.status(200).json({ todos: todos })
}

export const createData = (req: Request, res: Response ,next: NextFunction) => {
  const body = req.body as RequestBody
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  }

  todos.push(newTodo)

  res.status(201).json({
    message: 'Todo added.',
    todo: newTodo,
    todos: todos
  })
}

export const updateData = (req: Request, res: Response ,next: NextFunction) => {
  const params = req.params as RequestParams
  const body = req.body as RequestBody

  const tid = params.todoId
  const todoIndex = todos.findIndex(todoItem => todoItem.id === tid)
  if (todoIndex >= 0) {
    todos[todoIndex] = {
      id: todos[todoIndex].id,
      text: body.text
    }
    return (
      res.status(200).json({
        message: 'Updated todo.',
        todos: todos
      })
    )
  }
  res.status(404).json({ message: 'Could not find todo for this ID.' })
}

export const deleteData = (req: Request, res: Response ,next: NextFunction) => {
  const params = req.params as RequestParams

  todos = todos.filter(todoItem => todoItem.id !== params.todoId)
  res.status(200).json({
    message: 'Todo deleted.',
    todos: todos
  })
}