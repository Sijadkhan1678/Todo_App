import React,{FC} from 'react';
import { gql, useMutation } from '@apollo/client'
import { GET_TODOS } from './Todos'
import { Box,ListItem,ListItemText,Typography,Checkbox,IconButton,ListItemIcon} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import BorderColorIcon from '@mui/icons-material/BorderColor';
import { TodoItemProps } from './interface'

const DELETE_TODO = gql`
mutation deleteTodo( $id:ID ){
 deleteTodo (id:$id) {
     title
     status
}
}
`

const TodoItem:FC <TodoItemProps> = ({todo, handleUpdate,completeTodo }) => {
  
  const { id,title,status } = todo
  //console.log(title)
const [deleteTodo,{data,loading,error}] = useMutation(DELETE_TODO,{refetchQueries:[{query: GET_TODOS}]});
  
const Delete = (id:string) => { 
   deleteTodo({variables: {id:id}})
}
  const todoStatus = {
    id:id ? id: '',
    status: status ? false: true
  }
  
   return (
     
  <Box bgcolor='#0A2347' mt={2} borderRadius={2}>
      <ListItem>
    <ListItemIcon onClick={()=>completeTodo(todoStatus)}   sx={{color:'white'}}>
    
  { status !== true ? <RadioButtonUncheckedOutlinedIcon   />
           : <CheckCircleIcon /> }
              </ListItemIcon>
              

<ListItemText  primary={title} primaryTypographyProps={{
                  fontSize: 18,
                  color: 'white',
                  fontWeight: 'small',
                  letterSpacing: 0}} />
<IconButton color='secondary'  onClick={()=>handleUpdate(todo)}  sx={{color:'white'}} size='large'>
<BorderColorIcon fontSize="inherit" 
/>
</IconButton>
       <IconButton   aria-label="delete" size="large" color="error" edge="end" onClick={()=> id && Delete(id)}
       >
  <DeleteIcon />
</IconButton>   

      </ListItem>
  </Box>
   )
}
export default TodoItem