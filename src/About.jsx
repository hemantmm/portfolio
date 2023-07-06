import React from 'react'
import logo from '../src/images/Untitled design.jpg'

function About() {
  return (
    <>
    <section id='about' className='about'>
        <div className="container">
            <div className="about-content">
                <div className="img-side">
                    <img src={logo} alt="" className='work-emoji' />
                    <img src={logo} alt="" className='img-side__main-img' />
                    <span>
                        <img src={logo} alt="" />
                    </span>
                </div>
                <div className="text-side">
                    <h3>About me</h3>
                    <h4>A dedicated Front-end Developer
                        <br />
                        based in India 📍
                    </h4>
                    <p>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, and Tailwind. I excel in designing and maintaining responsive websites that offer a smooth user experience.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About