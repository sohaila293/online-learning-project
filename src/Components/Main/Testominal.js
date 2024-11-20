import React from 'react'
import "./Testominal.css";
import t1 from "../../images/t1.webp";
import t2 from "../../images/t2.webp";
import t3 from "../../images/t3.webp";
const Testominal = () => {
  return (
    <>
    <section className='Testominal'>
        <div className='container'>
            <div className='title'>
                <span>TESTIMONIAL</span>
                <h2>Our Successful Students</h2>
            </div>
            <div className='content'>
                 <div className='item'>
                    <div className='person'>
                        <img src={t1} alt="image"/>
                       
                        <div className='text'>
                            <span>ROGER SCOTT</span>
                            <span>MARKETING MANAGER</span>
                        </div>                
                    </div>
                    <div className='info'>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='person'>
                        <img src={t2} alt="image"/>
                        <div className='text'>
                            <span>ROGER SCOTT</span>
                            <span>MARKETING MANAGER</span>
                        </div>                
                    </div>
                    <div className='info'>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
                <div className='item'>
                    <div className='person'>
                        <img src={t3} alt="image"/>
                        <div className='text'>
                            <span>ROGER SCOTT</span>
                            <span>MARKETING MANAGER</span>
                        </div>                
                    </div>
                    <div className='info'>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Testominal