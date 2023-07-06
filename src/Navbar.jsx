import React from 'react'
import logo from '../src/images/Untitled design.jpg'
import {AiFillLinkedin,AiFillGithub, AiFillHtml5} from 'react-icons/ai'
import {BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss} from 'react-icons/bi'
import {PiHandWavingFill} from 'react-icons/pi'
import About from './About'
import Project from './Project'
import Contact from './Contact'

function Navbar() {
  return (
    // <div>Navbar</div>
    <>
    {/* <h2>hello</h2> */}
    <nav>
      <h3 className='logo'>Hemant.dev</h3>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
    
    <section id='home' className='hero'>
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1>Front-End Developer</h1>
              {/* <img src={logo} alt="Waving_hand" /> */}
              <PiHandWavingFill size={50} className='wavingHand' />
              <p>Hi, I'm Hemant M. A passionate Front-end React Developer.</p>
              <span>
                <a aria-label='linkedin' href="https://www.linkedin.com/in/hemant-mehta-97b40b220/">
                  <AiFillLinkedin />
                </a>
                <a aria-label='github' href="https://github.com/hemantmm">
                  <AiFillGithub />
                </a>
              </span>
            </div>
            <div className="hero-img"></div>
          </div>

          <div className="skills">
            <p>Tech Stack</p>
            <div className="logos">
              <ul>
                <li>
                  <AiFillHtml5 style={{color:'orangered'}} />
                </li>
                <li>
                  <BiLogoCss3 style={{color:'33A9DC'}} />
                </li>
                <li>
                  <BiLogoJavascript style={{color:'F7DF1E'}} />
                </li>
                <li>
                  <BiLogoReact style={{color:'54C1DE'}} />
                </li>
                <li>
                  <BiLogoTailwindCss style={{color:'38BDF8'}} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <About />
    <Project />
    <Contact />
    </>
  )
}

export default Navbar