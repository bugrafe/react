import React from 'react'
import Header from '../components/13-shop/header'
import { Container, Row } from 'react-bootstrap'
import Footer from '../components/13-shop/footer'
import MainMenu from '../components/00-home/main-menu'

const UserLayout = () => {
  return (
    <>
        <Header/>
        <Container>
            <Row>
                <Col md={4} lg={3}>
                    <MainMenu/>
                </Col>
                <Col md={8} lg={9}>
                    <Outlet/>
                </Col>
            </Row>
        </Container>
        <Footer/>

            
        


    </>
  )
}

export default UserLayout