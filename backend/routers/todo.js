import express from 'express';
import TodoModel from "../models/todo.js"

export const todoRouter = express.Router();

const createTodo = async (req, res) => {
  try {
    const name = req.body.name;
    
    const doc = new TodoModel({
      name,
    })  

    const todo = await doc.save();

    res.json(todo)
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}

const getTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find(req.query).exec();

    res.json(todos)
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}


todoRouter.post('/', createTodo);
todoRouter.get('/', getTodos);