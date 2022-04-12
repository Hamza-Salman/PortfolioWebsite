import React from 'react'
import {Box} from './FooterElements'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <Box>
        <Row>
            <Col md={11}><div style={{color:'lightgray'}}>Thanks for checking out my website!</div></Col>
            <Col md={1}><a href='https://github.com/Hamza-Salman'><FaGithub /></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href='https://www.linkedin.com/in/hamza-salman989'><FaLinkedinIn /></a></Col>
          </Row>
    </Box>
  )
}

export default Footer