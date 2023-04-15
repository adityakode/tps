import React from 'react'
import Form1 from './Form1'
import { ChakraProvider } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Blo = () => {
  return (
    <ChakraProvider>

        <Form1/>
        <Button><Link to={'/votercard'}>Verify</Link></Button>
    </ChakraProvider>
    
  )
}

export default Blo