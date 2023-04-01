import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import './Home.scss'

function Home() {
  const [isActive, setToActive] = useState('active')
  const [ currentIdx, setCurrentIdx ] = useState(0)
  const slides = [
    {url: '/assets/home/desktop/image-hero-paramour.jpg', title: 'Project Paramount', Description: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.'},
    {url: '/assets/home/desktop/image-hero-seraph.jpg', title: 'Seraph Station', Description: 'The Seraph Station project challenged us to design a unique station that would transport people throughh time. The result is a fresh and futuristic model inspired by space stations.'},
    {url: '/assets/home/desktop/image-hero-federal.jpg', title: 'Federal II Tower', Description: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.'},
    {url: '/assets/home/desktop/image-hero-trinity.jpg', title: 'Trinity Bank Tower', Description: 'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives'}
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx(currentIdx => currentIdx + 1);
      if(currentIdx == 3) {
        setCurrentIdx(0)
      }
    }, 10000)
    return () => clearInterval(interval)
  })
  
  const switchingNumbers = [
    {number: '1'},
    {number: '2'},
    {number: '3'},
    {number: '4'}
  ]

  const currentIdxBackground = {
    backgroundImage: `url(${slides[currentIdx].url}), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))`,
  };

  const goToSlide = (index) => {
    setCurrentIdx(index)
  };


  return (
    <div className='home'>
      <div className='home-container'>
        <h2 className='vertical-intro'>HOME</h2>
        <div className='home-contents-wrapper'>
          <div className='home-slides-wrapper'>
            {slides.map((slide,index) => {return <div key={index} style={currentIdxBackground} className={index === currentIdx ? 'slide active' : 'slide'}>
              <div className='slide-text-container'>
                <h1>{slide.title}</h1>
                <p>{slide.Description}</p>
                {/* <div className='btn-wrapper'>
                  <Link>See our portfolio </Link>
                  <i className="fa-solid fa-arrow-right"></i>
                </div> */}
                <Link className='btn' to='/portfolio'>See our portfolio<i className="fa-solid fa-arrow-right"></i></Link>

              </div>
            </div>
            })}
            <div className='switching-btn-wrapper'>
            {switchingNumbers.map((number, index) => {
              return <div key={index} onClick={() => goToSlide(index)} className={index === currentIdx ? 'number active' : 'number'}>
                      <p>{number.number}</p>
                    </div>
            })}
            </div>
          </div>
          {/* welcome to arch studio section START */}
          <section className='welcome'>
            <div className='welcome-contents'>
              <h1>Welcome</h1>
              <hr />
              <div className="contents-wrapper">
                <h2>Welcome to Arch Studio</h2>
                <p>
                  We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results. <br /> <br/>
                  Over the past 10 years, we have workd on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight. <br /> <br />
                  We work closely with our client so that we understand the intricacies of each project. Thid allows us to work in harmany the surrounding area to create truly stunning projects that will stand the test of time.
                </p>
              </div>
            </div>
            <div className='welcome-img'></div>
          </section>
          {/* welcome to arch studio section END */}
          {/* small team big ideas section START */}
          <section className='home-about'>
            <div className="home-about-container">
              <h1>Small teams, big ideas</h1>
              {/* <div className='btn-wrapper'>
                <Link to='/about'>About us</Link>
                <i className="fa-solid fa-arrow-right"></i>
              </div> */}
                <Link className='btn' to='/about'>About us<i className="fa-solid fa-arrow-right"></i></Link>

            </div>
          </section>
          {/* small team big ideas section END */}
          {/* featured project section START */}
          <section className='featured-projects'>
            <div className='featured-projects-container'>
              <div className='intro'>
                <h1>Featured</h1>
                <Link className='btn' to='/portfolio'>See all <i className="fa-solid fa-arrow-right"></i></Link>
              </div>
              <div className='projects'>
                  <div className='project-wrapper'>
                    <div className='number'>
                      <h1>1</h1>
                    </div>
                    <div className='details'>
                      <p>Project Del Sol</p>
                      <Link to='/portfolio'>View all projects</Link>
                    </div>
                  </div>
                <div className='project-wrapper'>
                  <div className='number'>
                    <h1>2</h1>
                  </div>
                  <div className='details'>
                    <p>228b Tower</p>
                    <Link to='/portfolio'>View all projects</Link>
                  </div>
                </div>
                <div className='project-wrapper'>
                  <div className='number'>
                    <h1>3</h1>
                  </div>
                  <div className='details'>
                    <p>Le Prototype</p>
                    <Link to='/portfolio'>View all projects</Link>
                  </div>
                </div>
              </div>

              <Link className='btn see-more-portfolio' to='/portfolio'>See all <i className="fa-solid fa-arrow-right"></i></Link>
                  

            </div>
          </section>
          {/* featured project section END */}
          {/* <div className='testingdiv'></div> */}
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  )
}

export default Home 