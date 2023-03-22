import {useState} from 'react';
import ArrowLeft from "../assets/images/arrowLeft.png"
import ArrowRight from "../assets/images/arrowRight.png"

const Slides = ({slides}) => {

    const [currentSlide, setCurrentSlide] = useState(0)

    console.log(slides);

    return (
        <div className='img-slide'>
            <img src={slides[currentSlide]} alt={slides[currentSlide]} />
            {(slides.length > 1 ) ? (
                <>
                <button className='left-btn ' onClick={ () => setCurrentSlide( (currentSlide === 0) ? (slides.length -1) : (currentSlide -1) ) }>
                    <img className="arrow-img" src={ArrowLeft} />
                </button>
                <button className='right-btn ' onClick={() => setCurrentSlide( (currentSlide === slides.length-1) ? 0 : (currentSlide +1) )}>
                <img className="arrow-img" src={ArrowRight} />
                </button>
                <h2 className='count'>{currentSlide +1}/{slides.length}</h2>
                </>
            ) : null}
            
        </div>
    );
};

export default Slides;