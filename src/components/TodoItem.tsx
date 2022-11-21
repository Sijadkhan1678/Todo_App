import React from 'react';
import { Box,ListItem,ListItemText,Typography,Checkbox,IconButton} from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/Delete'
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import BorderColorIcon from '@mui/icons-material/BorderColor';

const TodoItem = () => {
   return (
     
  <Box bgcolor='#0A2347' mt={2} borderRadius={2}>
      <ListItem /* secondaryAction={
              <IconButton edge="end" aria-label="delete" size="large">
                <DeleteIcon />
              </IconButton>
            }*/ >
    <ListItemIcon   sx={{color:'white'}}>
               {/* <Checkbox
                  edge="start"
                  checked={true}
                  color="success"
                  disableRipple
                
                />*/}
                <RadioButtonUncheckedOutlinedIcon   />
                <CheckCircleIcon />
              </ListItemIcon>
              
{/*<Typography    sx={{ display: 'inline' }}
                component="span"
                variant="body1"
                color="white"
              >
                to Scott, Alex, Jennifer
              </Typography>*/}
<ListItemText  primary="hi todo app" primaryTypographyProps={{
                  fontSize: 18,
                  color: 'white',
                  fontWeight: 'small',
                  letterSpacing: 0}} />
<IconButton color='secondary' sx={{color:'white'}} size='large'>
<BorderColorIcon fontSize="inherit"/>
</IconButton>
       <IconButton aria-label="delete" size="large" color="error" edge="end" >
  <DeleteIcon />
</IconButton>   

      </ListItem>
  </Box>
   )
}
export default TodoItem