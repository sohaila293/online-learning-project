import React from 'react';
import "./Footer.css";
import post1 from "../../images/post1.webp";
import post2 from "../../images/post two.webp";
import post3 from  "../../images/post3.webp";
const Footer = () => {
  return (
    <>
    <section className='footer'>
        <div className='container'>
          <div className='logo'>
            <h3>ACADEMIA</h3>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
            <div className='icons'>
            <i class="fab fa-facebook-f icon"></i>
            <i class="fab fa-twitter icon"></i>
            <i class="fab fa-instagram icon"></i>
            </div>
          </div>
          <div className='links'>
            <h4>Explore</h4>
            <ul>
              <li>
              About Us
              </li>
              <li>
              Services
              </li>
              <li>
              Courses
              </li>
              <li>
              Blog
              </li>
              <li>
              Contact us
              </li>
            </ul>
          </div>
          <div className='links'>
            <h4>Quick Links</h4>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='posts'>
            <h3>Recent Post</h3>
           <div className='item'>
           <div className='image'>
            <img src={post1} alt='image'/>
           </div>
            <div className='text'>
              <span>
              <i class="fa fa-calendar-alt"></i>
              <label for="">JAN. 18, 2021</label>
              </span>
              <span>
              <i class="fa fa-user"></i>
              <label for="">admin</label>
              </span>
              <h5>Build your Dream Software & Engineering ...</h5>
            </div>
            </div>
            <div className='item'>
           <div className='image'>
           <img src={post2} alt='image'/>
           </div>
            <div className='text'>
              <span>
              <i class="fa fa-calendar-alt"></i>
              <label for="">API. 25, 2022</label>
              </span>
              <span>
              <i class="fa fa-user"></i>
              <label for="">admin</label>
              </span>
              <h5>Build your Dream Software & Engineering ...</h5>
            </div>
            </div>
            <div className='item'>
           <div className='image'>
           <img src={post3} alt='image'/>
           </div>
            <div className='text'>
              <span>
              <i class="fa fa-calendar-alt"></i>
              <label for="">MAY. 15, 2022</label>
              </span>
              <span>
              <i class="fa fa-user"></i>
              <label for="">user</label>
              </span>
              <h5>Build your Dream Software & Engineering ...</h5>
            </div>
            </div> 
          </div>
          <div className='questions'>
            <h4>Have a Questions?</h4>
            <ul>
              <li>
              <i class="fa fa-map"></i>
              203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
              <i class="fa fa-phone-alt"></i>
              +2 392 3929 210
              </li>
              <li>
              <i class="fa fa-paper-plane"></i>
              info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
    </section>
    <div className='copy'>
      <span>Copyright ©2022 All rights reserved<i class="fa fa-heart"></i></span>
    </div>
    </>
  )
}

export default Footer