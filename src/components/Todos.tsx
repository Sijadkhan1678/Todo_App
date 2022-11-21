import React from 'react';
import { Box,List,Typography,Fab ,IconButton} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import TodoItem from './TodoItem'
const Todos = () => {
   return (
     <Box sx={{ width: '85%', maxWidth: 360, m: '0rem auto' }}  >
<IconButton sx={{mx:'7.7rem',mt:'2rem'}}>
<Fab color="secondary" aria-label="add" >
 <AddIcon />
</Fab>
</IconButton>
<Typography variant='h6' mt={3.7} fontSize="0.92rem" component='div'>
      Today  Tasks 
    </Typography>
      <List>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      
      
      </List>
     </Box>
   )
}
export default Todos