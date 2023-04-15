import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import Form1 from './Form1'

import './Formcomp.css'

const Formcomp = () => {
  return (
    <ChakraProvider>
        <>
        <div className='f1'>
            <Container>
                <Form1/>
            </Container>

        </div>
        
        </>
    </ChakraProvider>
  )
}

export default Formcomp