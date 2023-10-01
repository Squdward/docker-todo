import { TextInput, Button } from '@mantine/core';
import styles from "./styles.module.css"

const AddTodo = () => {
  return (
    <div className={styles.todo}>
      <TextInput/>
      <Button>Create</Button>
    </div>
  )
}

export {AddTodo}