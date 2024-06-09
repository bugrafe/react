import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Form5 = () => {

    const [formData, setFormData] =useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        address: ""
    });

    console.log(formData);
    
    const handleSubmit = (e) => {
        //1- Formun default submit davranişi iptal edilir
        e.preventDefault();

        const {firstName,lastName,email} = formData;

        try{
                //2- Form validasyon islemi yapılır
                if(!firstName || firstName.length<2) throw new Error("Please enter first name");
                if(!lastName || lastName.length<2) throw new Error("Please enter last name");
            
                const emailRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


                if(!emailRegex.test(email)) throw new Error("Please enter a valid email");


                //3- Payload API 'a gonderilir
        }catch (err){
            alert(err.message);
        }
       
    }

    

    const handleChange = (e) => {

        const {name,value}=e.target
        setFormData({
            ...formData,
            [name]: value
        });
    }

  return (
    <Container className='mt-4'>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>Firts Name</Form.Label>
                <Form.Control name='firstName' type="text" placeholder="" value={formData.firstName} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control name='lastName' type="text" placeholder="" value={formData.lastName} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control name='phoneNumber' type="text" placeholder="" value={formData.phoneNumber} onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control name='email' type="email" placeholder="" value={formData.email} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control name='address' type="text" placeholder="" value={formData.address} onChange={handleChange} as="textarea"/>
            </Form.Group>

            <Button type="submit">Send</Button>
        </Form>
    </Container>
  )
}

export default Form5