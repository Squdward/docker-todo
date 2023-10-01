export interface ITodo {
  name: string,
  id: string,
}

export interface ITodoProps extends ITodo {
  onDelete: (id: ITodo['id']) => void
}