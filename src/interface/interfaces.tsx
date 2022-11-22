import React from 'react'
export interface Todo {
    id?: string
    title: string
    status?: boolean
}

export interface TodosProps {
  handleModal: () => void;
  handleUpdate: (todo:Todo) => void;
  completeTodo: (todo:{id: string, status:boolean}) => void
}

export interface TodoItemProps {
  
  todo: Todo;
  handleUpdate: (todo:Todo) => void;
  
  completeTodo: (todoStatus:{id: string ,status:boolean}) => void
}


export interface FormProps {
  handleModal: () => void

  open: boolean
  
  current: Todo | null

  setCurrent: React.Dispatch<React.SetStateAction< Todo | null>>

  
  
  updateTodo: ( todo:Todo ) => void
}