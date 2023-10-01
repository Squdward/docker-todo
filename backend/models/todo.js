import moongose from "mongoose";

const TodoSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
  }
})

export default moongose.model('Todo', TodoSchema)