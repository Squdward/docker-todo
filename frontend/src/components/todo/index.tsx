import { Button } from "@mantine/core"
import Trash  from "./assets/trash.svg?react"
import React from "react"
import styles from "./styles.module.css"

import { ITodoProps } from "./types"


const Todo:React.FC<ITodoProps> = ({name, id, onDelete}) => {
  
  const onClickHandler = () => {
    onDelete(id)
  }

  return (
    <div className={styles.todo}>
      <div className={styles.wrapper}>
        <div className={styles.name}>{name}</div>
      </div>
      <Button onClick={onClickHandler}>{<Trash/>}</Button>
    </div>
  )
}

export {Todo}