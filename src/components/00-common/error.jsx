import React from 'react'
import { Alert, Container } from 'react-bootstrap'

const ErrorMessage = ({children}) => {
  return (
    <Container className='my-3'>
        <Alert variant='danger'>{children?.message ||"something went wrong"}</Alert>
    </Container>
  )
}

export default ErrorMessage