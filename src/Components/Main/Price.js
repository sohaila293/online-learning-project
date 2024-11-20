import React from 'react';
import "./Price.css";
const Price = () => {
  return (
    <>
    <section className='price' id='price'>
        <div className='container'>
            <div className='title'>
                <span>OUR PRICING</span>
                <h2>Pricing & Packages</h2>
            </div>
            <div className='content'>
                <div className='item'>
                    <span>BASIC PLAN</span>
                    <span>$</span>
                    <h3>49K</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <button>GET STARTED</button>
                </div>
                <div className='item'>
                <span>BEGINNER PLAN</span>
                <span>$</span>
                    <h3>79K</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <button>GET STARTED</button>
                </div>
                <div className='item'>
                <span>PREMIUM PLAN</span>
                <span>$</span>
                    <h3>79K</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <button>GET STARTED</button>
                </div>
                <div className='item'>
                <span>ULTIMATE PLAN</span>
                <span>$</span>
                    <h3>149K</h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <button>GET STARTED</button>
                </div>
            </div>
        </div>
    </section>
    <div className='letter'>
               <div className='container'>
                <div className='content'>
                <h2>Newsletter - Stay tune and get the latest update</h2>
                <span>Far far away, behind the word mountains</span>
                </div>
                <div className='search'>
                    <input type=' email' placeholder='enter email address'/>
                    <i class="fa fa-paper-plane"></i>
                </div>
               </div>
            </div>
    </>
  )
}

export default Price