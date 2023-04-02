import './HeroSection.scss'

function HeroSection({pageName, title, description, vertical_name}) {
    return (
        <div className="hero-section">
            <div className='hero-section-container'>
                <h2 className='vertical-intro'>{vertical_name}</h2>
                <div className='hero-contents-wrapper'>
                    <div className='hero-intro'>
                        <div className='img-intro'></div>
                        <div className='contents-intro'>
                            <h1>{pageName}</h1>
                            <div className='text-content'>
                                <hr />
                                <h2>{title}</h2>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection