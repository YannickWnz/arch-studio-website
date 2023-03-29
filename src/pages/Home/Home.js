import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
    }, 5000)
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
                <div className='btn-wrapper'>
                  <Link>See our portfolio </Link>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
            })}
            {/* <div className='slide1 slide'>
              <div className='slide-text-container'>
                <h1>Project Paramour</h1>
                <p>Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.</p>
                <div className='btn-wrapper'>
                  <Link>See our portfolio </Link>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className='slide2 active slide'>
              <div className='slide-text-container'>
                  <h1>Seraph Station</h1>
                  <p>The Seraph Station project challenged us to design a unique station that would transport people throughh time. The result is a fresh and futuristic model inspired by space stations.</p>
                  <div className='btn-wrapper'>
                    <Link>See our portfolio </Link>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
              </div>
            </div>
            <div className='slide3  slide'>
              <div className='slide-text-container'>
                  <h1>Federal II Tower</h1>
                  <p>A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.</p>
                  <div className='btn-wrapper'>
                    <Link>See our portfolio </Link>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
              </div>
            </div>
            <div className='slide4  slide'>
              <div className='slide-text-container'>
                  <h1>Trinity Bank Tower</h1>
                  <p>Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.</p>
                  <div className='btn-wrapper'>
                    <Link>See our portfolio </Link>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
              </div>
            </div> */}
            <div className='switching-btn-wrapper'>
            {switchingNumbers.map((number, index) => {
              return <div key={index} onClick={() => goToSlide(index)} className={index === currentIdx ? 'number active' : 'number'}>
                      <p>{number.number}</p>
                    </div>
            })}
            </div>
            {/* <div className='switching-btn-wrapper'>
              <div className='one active' onClick={() => {
                testGoToSlide(1)
              }}>
                <p>1</p>
              </div>
              <div className='two '>
                <p>2</p>
              </div>
              <div className='three'>
                <p>3</p>
              </div>
              <div className='four'>
                <p>4</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 