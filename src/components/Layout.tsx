import React, { FC, ReactNode } from 'react'
import {Box} from "@mui/material"
<<<<<<< HEAD

=======
import Navbar from './Navbar'
>>>>>>> 691da374219735741d793c1d4d272e0c2a124127

interface ChildrenPros {
    children: ReactNode
}

const Layout:FC <ChildrenPros> = ({children}) => {

    return(
    <Box>
<<<<<<< HEAD
    
=======
        <Navbar />
>>>>>>> 691da374219735741d793c1d4d272e0c2a124127
        
       { children } 
    </Box>
    )
}

export default Layout