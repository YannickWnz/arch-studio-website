import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../../Components/HeroSection/HeroSection'
import './Contact.scss'

function Contact() {
  let page_name = 'Contact'
  let title = 'Tell us about your project'
  let description = "We'd love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennesse. If you find yoursefl nearby, come say hello!"
  let vertical_name = 'CONTACT'

  return (
    <div className='contact'>
      <HeroSection pageName={page_name} title={title} description={description} vertical_name={vertical_name} />

      <div className='contact-container'>
        <div className='contact-contents-wrapper'>
          <section className='contact-details'>
            <hr />
            <div className='contact-intro'>
              <h1>Contact Details</h1>
            </div>
            <div className='offices'>
              <div className='office'>
                <h3>Main office</h3>
                <div className='office-details'>
                  <p>Mail : archone@mai.com</p>
                  <p>Address : 1892 Chenoweth Drive TN</p>
                  <p>Phone : 123-456-3451</p>
                </div>
              </div>
              <div className='office'>
                <h3>Office II</h3>
                <div className='office-details'>
                  <p>Mail : archone@mai.com</p>
                  <p>Address : 3399 Wines Lane TX</p>
                  <p>Phone : 832-123-4321</p>
                </div>
              </div>
            </div>
          </section>
          <section className='map'></section>
          <section className='connect'>
            <div className='connect-intro'>
              <h1>Connect with us</h1>
            </div>
            <div className='form-container'>
              <form>
                <input type='text' placeholder='Name' />
                <br />
                <input type='email' placeholder='Email' />
                <br />
                <textarea placeholder='Message' cols='50' />
                <br />
                <div className='contact-btn'>
                  <button><i className="fa-solid fa-arrow-right"></i></button>
                </div>
              </form>
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

export default Contact