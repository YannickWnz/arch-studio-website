import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../../Components/HeroSection/HeroSection'
import './AboutUs.scss'

function AboutUs() {

  let page_name = 'About';
  let title = 'Your team of professionals';
  let description = 'Our small team o world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationships our projects have with their surroundings.';
  let vertical_name = 'ABOUT US'

  return (
    <div className='about'>
      <HeroSection pageName={page_name} title={title} description={description} vertical_name={vertical_name} /> 
      
      <div className='about-container'>
        <div className='about-contents-wrapper'>
          <section className='heritage-section'>
            <div className='heritage-contents'>
              <hr />
              <h2>Our heritage</h2>
              <p>
                Founded in 2017, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into of the most sought after boutique firms in the country.
                <br />
                <br />
                Specializing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.
                <br />
                <br />
                Our small tea of world-class professionals provides input on every project.
              </p>
            </div>
            <div className='heritage-img'></div>
          </section>
          <section className='leaders-section'>
            <div className='section-title'>
              <h1>The Leaders</h1>
            </div>
            <div className='leaders-pictures'>
              <div className='leader'>
                <div className='pic'>
                  <div className='socials'>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                </div>
                <div className='details'>
                  <h2>Jake Richards</h2>
                  <p>Chief Architect</p>
                </div>
              </div>
              <div className='leader'>
                <div className='pic'>
                  <div className='socials'>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                </div>
                <div className='details'>
                  <h2>Thompson Smith</h2>
                  <p>Head of Finance</p>
                </div>
              </div>
              <div className='leader'>
                <div className='pic'>
                  <div className='socials'>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                </div>
                <div className='details'>
                  <h2>Jason Rourke</h2>
                  <p>Lead Designer</p>
                </div>
              </div>
              <div className='leader'>
                <div className='pic'>
                  <div className='socials'>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                </div>
                <div className='details'>
                  <h2>Maria Simpson</h2>
                  <p>Senior Architect</p>
                </div>
              </div>
              
            </div>
          </section>
          <section className='disabled'>
            <p>This page is yet to be obtimized for small and mobile screen</p>
            <Link to='/'>Go back home</Link>
          </section>
        </div>
      </div>


    </div>

  )
}

export default AboutUs