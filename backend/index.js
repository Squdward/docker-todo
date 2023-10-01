import express from 'express';
import { todoRouter } from './routers/todo.js';
import mongoose from 'mongoose';
import { BACKEND_PORT, MONGODB_PORT } from './constants/env.js';


const app = express();

mongoose
	.connect(`mongodb://root:example@localhost:${MONGODB_PORT}`)
	.then(() => console.log('DB OK'))
	.catch((err) => console.log('DB ERROR', err))


app.use(express.json());

app.use('/todo', todoRouter);

app.listen(BACKEND_PORT, (error) => {
  if(error) {
    return console.log(error)
  }

  return console.log(`STARTED ON ${BACKEND_PORT} PORT`)
})