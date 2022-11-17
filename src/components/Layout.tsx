import React, { FC, ReactNode } from 'react'
import {Box} from "@mui/material"
import Navbar from './Navbar'

interface ChildrenPros {
    children: ReactNode
}

const Layout:FC <ChildrenPros> = ({children}) => {

    return(
    <Box>
        <Navbar />
        
       { children } 
    </Box>
    )
}

export default Layout