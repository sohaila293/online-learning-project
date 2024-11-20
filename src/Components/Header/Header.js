import React from 'react'
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
  return (
   <>
  <section className='header'>
    <div className='Container'>
        <nav>
            <div className='logo'>
                <span>ACADEMIA</span>
                <span>ONLINE EDUCATION & LEARNING</span>
            </div>
            <div className='content'>
            
          <a href="#home"> Home</a>
          <a href='#allcourses'> All Courses</a>
         <a href='#about'>  About</a>
         <a href='#team'> Team</a>
          <a href='#pricing'> Pricing</a>
           <a href="#journal">Journal</a>
           <a href=' #contact'> Contact</a>
           <a href='# GET CERTIFICATE'> GET CERTIFICATE</a>
          
            </div>
        </nav>
        <div className="home" id="home">
            <div className='content'>
                <span>Welcome to ACADEMIA</span>
                <h1>best online education<br/> expertise</h1>
                <p>far far away,behind the word mountains, far from the countries Voklia and<br/> Consonantia,there live the blind texts.</p>
                <div className='btns'>
                    <button>GET STARTED NOW</button>
                    <button>VIEW COURSE</button>
                </div>
            </div>
        </div>
    </div>
  </section>
   </>
  )
}

export default Header