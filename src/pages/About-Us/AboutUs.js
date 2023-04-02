import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import './AboutUs.scss'

function AboutUs() {

  const page_name = 'About';
  let title = 'Your team of professionals';
  let description = 'Our small team o world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationships our projects have with their surroundings.';
  let vertical_name = 'ABOUT US'

  return (
    // <div className='about'>
    //   <div className='about-container'>
    //     <div className='about-contents-wrapper'>
    //       <div className='about-intro'>
    //         <div className='img-intro'></div>
    //         <div className='contents-intro'>
    //           <h1>About</h1>
    //           <div className='text-content'>
    //             <hr />
    //             <h2>Your team of professionals</h2>
    //             <p>Our small team o world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationships our projects have with their surroundings.</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='about'>
      <HeroSection pageName={page_name} title={title} description={description} vertical_name={vertical_name} /> 

    </div>

  )
}

export default AboutUs