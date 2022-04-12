import React from 'react'
import myImg from '../assets/grad.jpg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'

const Home = () => {
  return (
    <div className="homepage">
      <div className='topPage'>
        <h1>HELLO 😊</h1><br></br>
        <h2>I'm Hamza Salman,</h2><br></br>
        <h3>Welcome to my website!</h3>
      </div>
      <div className='mainContent'>
        <div className='mainParagraph'>
            <Row>
              <Col md={7} className='amoutMeText'>
              <h1>Who Am I?</h1>
              <p>
              For as long as I can remember, I've always wanted to know what made machines <b>'tick'.</b> This lead to alot of broken toys and rc cars I couldn't put back together as my 9 year old self. Eventually I <b>learned</b> how to build my first computer and not long after I wanted to <b>make my own games </b> which lead me into <b>programming</b> where  <b>I fell in love with computers.</b>
              <br />
              <br />Today, I am fluent in programming languages like
              <i>
                <b> Java, HTML/CSS, PHP, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b>Web applications </b> and
                also in areas related to{" "}
                <b>
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              For fun, I like developing applications
              with <b>Node.js</b> and
              <i>
                <b>
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b> React.js and Next.js </b>
              </i>
               due to modern features and it's simplicity which makes its faster to create something that works quickly with minimal code needed.
            </p>
              </Col>
              <Col md={5} >
                <div className='center'>
                  <img src={myImg} alt="avatar" />
                </div>
              </Col>
            </Row>
        </div>
        <div className='contactInfo'>
          <h1>Connect with me</h1>
          <p>Feel free to reach out 👍</p>
          <Row>
            <Col><a href='https://github.com/Hamza-Salman'><FaGithub /></a></Col>
            <Col><a href='https://www.linkedin.com/in/hamza-salman989'><FaLinkedinIn /></a></Col>
          </Row>
          <br></br><br></br>
        </div>
      </div>
    </div>
  )
}

export default Home