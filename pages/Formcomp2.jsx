import React from 'react'
import Form2 from './Form2'
import './Formcomp2.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'

const Formcomp2 = () => {
  return (
    <ChakraProvider>
    <>
    <div className='f2'>
        <Container>
            <Form2/>
        </Container>

    </div>
    
    </>
</ChakraProvider>
  )
}

export default Formcomp2