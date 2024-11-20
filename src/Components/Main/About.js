import React from 'react'
import "./About.css";
import about from "../../images/about.webp";
import aboutimageone from "../../images/reading.png";
import aboutimagetwo from "../../images/diploma.png";
import aboutimagethree from "../../images/athlete.png";
import aboutfooterimageone from "../../images/aboutfooter1.png";
import aboutfooterimagetwo from "../../images/aboutfooter2.png";
import aboutfooterimagethree from "../../images/aboutfooter3.png";
import aboutfooterimagefour from "../../images/aboutfooter4.png";
const About = () => {
  return (
   <>
   <section className="about" id="about">
    <div className='container'>
        <div className='image'>
            <img src={about} alt='aboutimage'/>
        </div>
        <div className='content'>
            <span>LEARN ANYTHING</span>
            <h2>Benefits About Online<br/> Learning Expertise</h2>
            <div className='items'>
                <div className='item'>
                   <div className='image'>
                    <img src={aboutimageone} alt='aboutimageone'/>
                   </div>
                   <div className='info'>
                    <h3>Online Courses</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                   </div>
                </div>
                <div className='item'>
                   <div className='image'>
                    <img src={aboutimagetwo} alt='aboutimagetwo'/>
                   </div>
                   <div className='info'>
                    <h3>Earn A Certificates</h3>
                   <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                   </div>
                </div>
                <div className='item'>
                   <div className='image'>
                    <img src={aboutimagethree} alt='aboutimagethree'/>
                   </div>
                   <div className='info'>
                    <h3>Learn with Expert</h3>
                     <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                     </div>
                </div>
            </div>
        </div>
    </div>
    <div className='aboutfooter'>
        <div className='container'>
            <div className='item'>
                <img src={aboutfooterimageone} alt="icon-image"/>
                <div className='info'>
                    <h3>3,000</h3>
                    <span>SUCCESS STORIES</span>
                </div>
            </div>
            <div className='item'>
                <img src={aboutfooterimagetwo} alt="icon-image"/>
                <div className='info'>
                    <h3>320</h3>
                    <span>TRUSTED TUTORS</span>
                </div>
            </div>
            <div className='item'>
                <img src={aboutfooterimagethree} alt="icon-image"/>
                <div className='info'>
                    <h3>1,000</h3>
                    <span>SCHEDULES</span>
                </div>
            </div>
            <div className='item'>
                <img src={aboutfooterimagefour} alt="icon-image"/>
                <div className='info'>
                    <h3>587</h3>
                    <span>COURSES</span>
                </div>
            </div>
        </div>
    </div>
   </section>
   </>
  )
}

export default About