import React,{FC} from 'react';
import { useQuery,useMutation, gql } from '@apollo/client';
import { Box,List,Typography,Fab,LinearProgress } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import TodoItem from './TodoItem'
import { Todo,TodosProps } from '../interface/interfaces'

export const GET_TODOS = gql`
query getTodos{
 
todos {
    id
    title
   status
}
}`

const Todos: FC <TodosProps> = ({ handleUpdate,handleModal,completeTodo }) => {
  
  const { data,loading,error } = useQuery(GET_TODOS);
  
  const Loading = <LinearProgress color="secondary" />

   return (
     <Box sx={{ width: '85%', maxWidth: 360, m: '0rem auto' }}>

<Fab color="secondary" aria-label="add" sx={{mx:'7.9rem',mt:'2rem'}}
>
 <AddIcon onClick={()=> handleModal()} />
</Fab>

<Typography variant='h6' mt={3.7} fontSize="0.92rem" component='div'>
      Today  Tasks 
    </Typography>
      <List>
    { loading ? Loading : data.todos.map( (todo:Todo) => (  
      <TodoItem key={todo.id} todo={todo}  handleUpdate={handleUpdate} completeTodo={completeTodo}  />
      )) }
      </List>
     </Box>
   )
}
export default Todos