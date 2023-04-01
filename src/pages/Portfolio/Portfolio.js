import React, { useState } from 'react'
import './Portfolio.scss'


function Portfolio() {

  // useState();
  const portfolioSlides = [
    // {path: '/assets/home/desktop/image-hero-paramour.jpg'}
  ]

  return (
    <div className='portfolio'>
      <div className='portfolio-container'>
        <h2 className='vertical-intro'>PORTFOLIO</h2>
        <div className='portfolio-contents-wrapper'>
          <div className='content'>
            <div className='project-details'>
              <h1>Seraph Station</h1>
              <p>September 2019</p>
            </div>
            <div className='hover-wrapper'></div>
          </div>
          <div className='content'>
            <div className='project-details'>
              <h1>Eebox Building</h1>
              <p>August 2017</p>
            </div>
            <div className='hover-wrapper'></div>
          </div>
          <div className='content'>
            <div className='project-details'>
              <h1>Federal II Tower</h1>
              <p>March 2017</p>
            </div>
            <div className='hover-wrapper'></div>
          </div>
          <div className='content'>
            <div className='project-details'>
              <h1>Project Del Sol</h1>
              <p>January 2016</p>
            </div>
            <div className='hover-wrapper'></div>
          </div>
          <div className='content'>
            <div className='project-details'>
              <h1>Le Prototype</h1>
              <p>Octobere 2015</p>
            </div>
            <div className='hover-wrapper'></div>
          </div>
          <div className='content'>
            <div className='project-details'>
              <h1>228B Tower</h1>
              <p>April 2015</p>
            </div>
            <div className='hover-wrapper'></div>
          </div>
          <div className='content'>
            <div className='project-details'>
              <h1>Grand Edelweiss Hotel</h1>
              <p>Decembere 2013</p>
            </div>
            <div className='hover-wrapper'></div>
          </div>
          <div className='content'>
            <div className='project-details'>
              <h1>Netcry Tower</h1>
              <p>August 2012</p>
            </div>
            <div className='hover-wrapper'></div>
          </div>
          <div className='content'>
            <div className='project-details'>
              <h1>Hypers</h1>
              <p>January 2012</p>
            </div>
            <div className='hover-wrapper'></div>
          </div>
          <div className='content'>
            <div className='project-details'>
              <h1>SXIV Tower</h1>
              <p>March 2011</p>
            </div>
            <div className='hover-wrapper'></div>
          </div>
          <div className='content'>
            <div className='project-details'>
              <h1>Trinity Bank Tower</h1>
              <p>September 2010</p>
            </div>
            <div className='hover-wrapper'></div>
          </div>
          <div className='content'>
            <div className='project-details'>
              <h1>Project Paramour</h1>
              <p>February 2008</p>
            </div>
            <div className='hover-wrapper'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio