import React, { PureComponent } from 'react'
import 'animate.css'

import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai'

export class home extends PureComponent {
  render() {
    return (<>
        <section className='header'>
        <div className='bg-image'> </div>
        <div className='bg-text'>
  
          <h1>Hey, it's me Sankar!</h1>
          <h2>I'm a freelancing college student, based in Hyderabad.</h2>
          <a href='https://github.com/Lumine8' target={'_blank'}><AiOutlineGithub className='ani'/></a> <a href='https://www.instagram.com/luminepanda/' target={'_blank'}><AiOutlineInstagram className='ani'/></a> <a href='https://www.linkedin.com/in/sankar-gopan-5660a1141/' target={'_blank'}><AiOutlineLinkedin className='ani'/></a> <a href='mailto:sankargopan1@gmail.com' target={'_blank'}><AiOutlineMail className='ani'/></a>
  
        </div>
        <button className="content"><a href='#section-2' style={{color:'white',textDecoration:'none'}}>
        <p>Click the arrow to know more about me !</p>
        <svg id="more-arrows">
        <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
        <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
        <polygon className="arrow-bottom" points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
        </svg>
        </a></button>
      </section>
  
      <section id='section-2'>
  
      </section>
      </>
    )
  }
}

export default home