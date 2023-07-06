import React from 'react'
import logo from '../src/images/shipCartImage.png'
import logo1 from '../src/images/cryptoUpdateImage.png'
import logo2 from '../src/images/blogPostImage.png'
import {AiFillGithub } from 'react-icons/ai'
import {BsBoxArrowUpRight} from 'react-icons/bs'

function Project() {
  return (
    <section id='project' className='project'>
        <div className="container">
            <div className="project-content">
                <p>Portfolio</p>
                <h3>Each project is a unique piece of development 🧩</h3>
                <div className="project-grid">
                    <div className="pro pro__1 undefined">
                        <div className="pro__img">
                            <a href="https://ship-cart-cn8q.vercel.app/">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                        <div className="pro__text">
                            <h3>Ship Cart 🛍️</h3>
                            <p>Ship Cart is an online shopping app that provides users in India with a hassle-free way to shop for products from the US and have them delivered to their doorstep.</p>
                            <div className="stack">
                                <p>REACT</p>
                                <p>TAILWIND CSS</p>
                            </div>
                            <div className="links">
                                <a href="https://github.com/hemantmm/Ship-Cart">Code
                                <AiFillGithub />
                                </a>
                                <a href="https://ship-cart-cn8q.vercel.app/">Demo
                                <BsBoxArrowUpRight />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pro pro__1 reversed-proj">
                        <div className="pro__img">
                            <a href="https://crypto-market-rp67.vercel.app/">
                                <img src={logo1} alt="" />
                            </a>
                        </div>
                        <div className="pro__text">
                            <h3>Crypto Update 🪙</h3>
                            <p>CRYPTO UPDATE IS A CRYPTO APP THAT ALLOWS USERS TO SEARCH FOR INFORMATION ABOUT VARIOUS CRYPTOCURRENCIES IN REAL-TIME.</p>
                            <div className="stack">
                                <p>REACT</p>
                                <p>TAILWIND CSS</p>
                            </div>
                            <div className="links">
                                <a href="https://github.com/hemantmm/CryptoMarket">Code
                                <AiFillGithub />
                                </a>
                                <a href="https://crypto-market-rp67.vercel.app/">Demo
                                <BsBoxArrowUpRight />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pro pro__1 undefined">
                        <div className="pro__img">
                            <a href="https://blog-post-git-master-hemantmm.vercel.app/">
                                <img src={logo2} alt="" />
                            </a>
                        </div>
                        <div className="pro__text">
                            <h3>BLOG POST 📝</h3>
                            <p>Blog Post App is a web-based application that allows users to create and publish blog posts. It provides a user-friendly interface for creating posts. With this app, users can easily share their thoughts, ideas, and experiences with the world through their own personal blog.</p>
                            <div className="stack">
                                <p>REACT</p>
                                <p>Vanila CSS</p>
                            </div>
                            <div className="links">
                                <a href="https://github.com/hemantmm/BlogPost">Code
                                <AiFillGithub />
                                </a>
                                <a href="https://blog-post-git-master-hemantmm.vercel.app/">Demo
                                <BsBoxArrowUpRight />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="pro pro__1 undefined">
                        <div className="pro__img">
                            <a href="https://ship-cart-cn8q.vercel.app/">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                        <div className="pro__text">
                            <h3>Ship Cart 🛍️</h3>
                            <p>Ship Cart is an online shopping app that provides users in India with a hassle-free way to shop for products from the US and have them delivered to their doorstep</p>
                            <div className="stack">
                                <p>React</p>
                                <p>TailWind</p>
                            </div>
                            <div className="links">
                                <a href="https://github.com/hemantmm/Ship-Cart">Code
                                <AiFillGithub />
                                </a>
                                <a href="https://ship-cart-cn8q.vercel.app/">Demo
                                <BsBoxArrowUpRight />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pro pro__1 reversed-proj">
                        <div className="pro__img">
                            <a href="https://ship-cart-cn8q.vercel.app/">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                        <div className="pro__text">
                            <h3>Ship Cart 🛍️</h3>
                            <p>Ship Cart is an online shopping app that provides users in India with a hassle-free way to shop for products from the US and have them delivered to their doorstep</p>
                            <div className="stack">
                                <p>React</p>
                                <p>TailWind</p>
                            </div>
                            <div className="links">
                                <a href="https://github.com/hemantmm/Ship-Cart">Code
                                <AiFillGithub />
                                </a>
                                <a href="https://ship-cart-cn8q.vercel.app/">Demo
                                <BsBoxArrowUpRight />
                                </a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
    )
}

export default Project