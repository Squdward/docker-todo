import express from 'express';
import { todoRouter } from './routers/todo.js';
import mongoose from 'mongoose';

const PORT = 3001;

const app = express();

mongoose
	.connect("mongodb://root:example@localhost:27017")
	.then(() => console.log('DB OK'))
	.catch((err) => console.log('DB ERROR', err))


app.use(express.json());

app.use('/todo', todoRouter);


app.listen(PORT, (error) => {
  if(error) {
    return console.log(error)
  }

  return console.log(`STARTED ON ${PORT} PORT`)
})