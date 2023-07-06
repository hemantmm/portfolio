import React from 'react'
import {AiFillLinkedin,AiFillGithub,AiOutlineCopyrightCircle} from 'react-icons/ai'
import {FaMapMarked} from 'react-icons/fa'
import {RiMailOpenFill} from 'react-icons/ri'

function Contact() {
  return (
    <>
    <section id='contact' className='contact'>
        <div className="container">
            <div className="contact__content">
                <div className="contact__title">
                    <p>Contact</p>
                    <h3>Don't be shy! Hit me up! 👇</h3>
                </div>
                <div className="contact__icons">
                    <div className="contact__icon-box">
                        <span>
                            <FaMapMarked size={40} style={{color:'#147efb'}} />
                        </span>
                        <div className="contact__info">
                            <h3>Location</h3>
                            <p>Chennai,India</p>
                        </div>
                    </div>

                    <div className="contact__icon-box">
                    <span>
                            <RiMailOpenFill size={40} style={{color:'#147efb'}} />
                        </span>
                        <div className="contact__info">
                            <h3>Mail</h3>
                            <p>
                            <a href="mailto:hemant29mehta@gmail.com">hemant29mehta@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div className="container">
            <div className="footerc">
                <h3> Copyright <AiOutlineCopyrightCircle style={{fontSize:'1.3rem'}} /> 2023.All rights are reserved</h3>
                <div className="footerc__socials">
                <a aria-label='linkedin' href="https://www.linkedin.com/in/hemant-mehta-97b40b220/">
                  <AiFillLinkedin />
                </a>
                <a aria-label='github' href="https://github.com/hemantmm">
                  <AiFillGithub />
                </a>
                </div>
            </div>
        </div>
    </footer>

    </>
  )
}

export default Contact