import React, { FC } from 'react'
import { gql, useMutation } from '@apollo/client';
import { GET_TODOS } from './Todos'
import { Box,Typography,Stack, Button, FormControl, Modal } from '@mui/material'
import { TextField } from "formik-mui";
import { Formik, Form, Field } from 'formik'
import { Schema } from './Schema'
import { Todo,FormProps } from '../interface/interfaces'


const TodoForm: FC<FormProps> = ({ handleModal, open, current, setCurrent, updateTodo 
  
}) => {

const ADD_TODO = gql`
mutation addTodo($title:String,$status:Boolean){
 addTodo (title:$title,status:$status) {
     id
     title
     status
}
}`


const [addTodo,{data,loading,error}] = useMutation(ADD_TODO,{
  refetchQueries: [{query: GET_TODOS}]
})

  const formData:Todo = { title: '' }
  
  return (

    <div>
      <Modal
        open={open}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography variant="h5" fontWeight={350} mx={11}>
         Add Today Task
        </Typography>
          <Formik
            initialValues={ current !==null ? current : formData }
            validationSchema={Schema}

            onSubmit={(values) => {
            console.log(values.title)
              if(current !== null)  {
                
                const updatedValue = {
                  id: current.id,
                  title: values.title,
                  
                  
                }
              updateTodo(updatedValue)
                handleModal()
                setCurrent(null)
               
              } else {

                const todo = {
                  title: values.title,
                  status: false,
                  
                }
         addTodo({variables:todo })
              
          
                handleModal()

              }
          
              // setTimeout(() => {

                
              // }, 2000)
             
            }}
          >

            <Form autoComplete="off">

              <Box mt={3}>

                <FormControl sx={{ m: '1rem 5rem' }}>

                  <Field
                    component={TextField}
                    id="name"
                    label="Todo"
                    name='title'
                  />
                </FormControl>

            
              </Box>

              <Stack m={3} direction='row' justifyContent='space-around'>

                <Button size='large'
                  variant='contained'
                  type='submit' >
                  Add Todo
                </Button>

              </Stack>
            </Form>

          </Formik>
        </Box>
      </Modal>
    </div>

  )
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '1rem',
  boxShadow: 24,
  p: 4,
};



export default TodoForm;