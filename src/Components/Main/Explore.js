import React from 'react';
import "./Explore.css";
import c1 from "../../images/c1.png";
import c2 from "../../images/c2.png";
import c3 from "../../images/c3.png";
import back from "../../images/back.webp";
const Explore = () => {
  return (
   <>
   <section className='explore' id="explore">
    <div className='container'>
        <div className='title'>
            <span>our courses</span>
            <h2>explore our popular online courses</h2>
        </div>
        <div className='content'>
            <div className='item'>
                <div className='course'>
                   <div className='image'>
                   <img src={c1} alt='image'/>
                   </div>
                   <h3>Introducing to Software Engineering
                   </h3>
                </div>
                <span>(5.0)</span>
                <div className='number'>
                    <img src={back} alt='image'/>
                    <span>50 lectures (190 hrs)</span>
                </div>
                <span>by John Smith</span>
                <div className='price'>
                    <span>$100 All Course / $15 per month</span>
                </div>
                <div className='button'>
                    <button>ENROLL NOW </button>
                </div>
            </div>
            <div className='item'>
                <div className='course'>
                   <div className='image'>
                   <img src={c2} alt='image'/>
                   </div>
                   <h3>Enhancing Adobe Photoshop CC 2020 Skills
                   </h3>
                </div>
                <span>(5.0)</span>
                <div className='number'>
                    <img src={back} alt='image'/>
                    <span>30 lectures (125 hrs)</span>
                </div>
                <span>by Ram Gurung</span>
                <div className='price'>
                    <span>$200 All Course / $25 per month</span>
                </div>
                <div className='button'>
                    <button>ENROLL NOW </button>
                </div>
            </div>
            <div className='item'>
                <div className='course'>
                   <div className='image'>
                   <img src={c3} alt='image'/>
                   </div>
                   <h3>HTML, CSS, and Javascript for Web Developers</h3>
                </div>
                <span>(5.0)</span>
                <div className='number'>
                    <img src={back} alt='image'/>
                    <span>by Saroj Nepal</span>
                </div>
                <span>50 lectures (50 hrs)</span>
                <div className='price'>
                    <span>$50 All Course / $5 per month</span>
                </div>
                <div className='button'>
                    <button>ENROLL NOW </button>
                </div>
            </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default Explore