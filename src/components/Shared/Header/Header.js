
import React from 'react';
import { ButtonGroup, button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

    return (


        // header part

        <>

            <Navbar bg="white" variant="" className="py-4 shadow" collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="#home" className=" nav-item  text-dark fw-bolder"><h1>Sumaiya Pias Trisha</h1></Navbar.Brand>
                    <Navbar.Toggle className="bg-danger" />
                    <Navbar.Collapse className="justify-content-end  ">
                        <Nav.Link as={Link} to="/home" className="  nav-item text-dark"><h4>Home</h4></Nav.Link>
                        <Nav.Link as={Link} to="/projects" className="  nav-item text-dark"><h4>Projects</h4></Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="  nav-item text-dark"><h4>Contact Me</h4></Nav.Link>
                        <Nav.Link as={Link} to="/blogs" className="  nav-item text-dark"><h4>Blogs</h4></Nav.Link>
                        <h4 ><a href="https://drive.google.com/file/d/1kCvX3NmbfakKJiuUVv1uJNDRChJq60mi/view?usp=sharing" target="_blank" className="text-dark">Resume</a>.</h4>
                        <h4 ><a href="#aboutMe" target="_blank" className="text-dark">About Me</a>.</h4>




                    </Navbar.Collapse>

                </Container>
            </Navbar>


        </>



    );
};

export default Header;