import React,{FC,useState} from 'react';
import { Box } from '@mui/material' 
import { gql, useMutation } from '@apollo/client';
import { GET_TODOS } from './components/Todos'
import Todos from '../components/Todos'
import Form from '../components/Form'
import { Todo } from './interface/interfaces'
import type { HeadFC } from "gatsby"
import Layout from "../components/Layout";


const UPDATE_TODO = gql`

mutation updateTodo($id:ID!,$title:String,$status:Boolean){
 updateTodo (id:$id,title:$title,status:$status) {
     id
     title
     status
 }   
}`



const Home:FC = () => {

  const [open, setOpen] = useState<boolean>(false);
const [current,setCurrent] = useState <Todo | null> (null)


const handleModal = () => open ? setOpen(false) : setOpen(true)
 
const handleUpdate = (todo:Todo):void => {
   
    setCurrent(todo)
    handleModal()
    
}
const [update,{data,
loading,error}
] = useMutation(UPDATE_TODO,{refetchQueries: [{query: GET_TODOS}]});

const updateTodo = (todo:Todo) =>  {
  
  const up= update({ variables: todo })
  
}

const completeTodo = (todo:{id:string,status:boolean}) => {
  update({variables:todo})
}

  return (
    <Layout >

<Box bgcolor='#6D82ED'
    color="white" py={4}>

      <Todos  handleModal={handleModal} handleUpdate={handleUpdate} 
        completeTodo={completeTodo} />
      

 <Form  handleModal={handleModal} current={current} setCurrent={setCurrent} updateTodo={updateTodo}  open={open}  />
    </Box>

      
      
    </Layout>
  )
}

export default Home;

export const Head: HeadFC = () => <title>Home Page</title>
