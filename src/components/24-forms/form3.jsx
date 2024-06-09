import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Form3 = () => {

    const [formData, setFormData] =useState({
        firstName: "",
        lastname: "",
        phoneNumber: "",
        email: "",
        address: ""
    });

    console.log(formData);
    
    const handleSubmit = (e) => {
        //1- Formun default submit davranişi iptal edilir
        e.preventDefault();

        //2- Form validasyon islemi yapılır
        if(!firstName){
            alert("Please enter first name");
            return;
        }

        //3- Payload olusturulur
        // Ayrıca bir payload olusturmaya gerek yok Cunku formData state i bir payload formunda

        //4- Payload API 'a gonderilir


        alert("Hello");
    }

  return (
    <Container className='mt-4'>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>Firts Name</Form.Label>
                <Form.Control type="text" placeholder="" value={formData.firstName} onChange={(e)=>setFormData({...formData,firstName: e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="" value={formData.lastname} onChange={(e)=>setFormData({...formData,lastname: e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="" value={formData.phoneNumber} onChange={(e)=>setFormData({...formData,phoneNumber: e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="" value={formData.email} onChange={(e)=>setFormData({...formData,email: e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="" value={formData.address} onChange={(e)=>setFormData({...formData,address: e.target.value})} as="textarea"/>
            </Form.Group>

            <Button type="submit">Send</Button>
        </Form>
    </Container>
  )
}

export default Form3