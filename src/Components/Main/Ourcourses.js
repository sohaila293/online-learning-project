import React from 'react'
import './Ourcourses.css';
import imageone from "../../images/o1.1.png";
import imagetwo from "../../images/o2.1.png";
import imagethree from "../../images/o3.1.png";
import imagefour from "../../images/o4.1.png";
import imagefive from "../../images/o5.1.png";
import imagesix from "../../images/o6.1.png";
import imageseven from "../../images/o7.1.png";
import imageeight from "../../images/o8.1.png";
import imagenine from "../../images/o9.1.png";
import imageten from "../../images/o10.1.png";
import imageeleven from "../../images/o11.1.png";
import imagetewleve from "../../images/o12.1.png";
const Ourcourses = () => {
  return (
    <>
    <section className='ourcourses' id="ourcourses">
        <div className='container'>
            <div className='title'>
                <span>COURSES</span>
                <h2>Browse Our Online Courses</h2>
            </div>
            <div className='content'>
                <div className='box'>
                    <img src={imageone} alt="photo"/>
                    <div className='info'>
                        <span>UI/UX Design Courses</span>
                        <span>25Courses</span>
                    </div>
                </div>
                <div className='box'>
                    <img src={imagetwo} alt="photo"/>
                    <div className='info'>
                        <span>Art & Design</span>
                        <span>25Courses</span>
                    </div>
                </div>
                <div className='box'>
                    <img src={imagethree} alt="photo"/>
                    <div className='info'>
                        <span>Computer Science</span>
                        <span>10Courses</span>
                    </div>
                </div>
                <div className='box'>
                    <img src={imagefour} alt="photo"/>
                    <div className='info'>
                        <span>History & Archeologic</span>
                        <span>15Courses</span>
                    </div>
                </div>
                <div className='box'>
                    <img src={imagefive} alt="photo"/>
                    <div className='info'>
                        <span>Software Engineering</span>
                        <span>30Courses</span>
                    </div>
                </div>
                <div className='box'>
                    <img src={imagesix} alt="photo"/>
                    <div className='info'>
                        <span>Information Software</span>
                        <span>60Courses</span>
                    </div>
                </div>
                <div className='box'>
                    <img src={imageseven} alt="photo"/>
                    <div className='info'>
                        <span>Health & Fitness</span>
                        <span>10Courses</span>
                    </div>
                </div>
                <div className='box'>
                    <img src={imageeight} alt="photo"/>
                    <div className='info'>
                        <span>Marketing</span>
                        <span>30Courses</span>
                    </div>
                </div>
                <div className='box'>
                    <img src={imagenine} alt="photo"/>
                    <div className='info'>
                        <span>Graphic Design</span>
                        <span>80Courses</span>
                    </div>
                </div>
                <div className='box'>
                    <img src={imageten} alt="photo"/>
                    <div className='info'>
                        <span>Music</span>
                        <span>120Courses</span>
                    </div>
                </div>
                <div className='box'>
                    <img src={imageeleven} alt="photo"/>
                    <div className='info'>
                        <span>Business Administration</span>
                        <span>17Courses</span>
                    </div>
                </div>
                <div className='box'>
                    <img src={imagetewleve} alt="photo"/>
                    <div className='info'>
                        <span>Web Management</span>
                        <span>17Courses</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Ourcourses