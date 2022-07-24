import React from 'react'
import './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import BoraBora from '../../assets/images/borabora.jpg'
import BoraBora2 from '../../assets/images/borabora2.jpg'
import Maldives from '../../assets/images/maldives.jpg'

function ImgCarousel() {
    return (
        <div name='carousel' className='container'>
            <Carousel className='carousel' showArrows={true} autoPlay={false} infiniteLoop={true} >
                <div>
                    <img src={BoraBora} alt='/' />
                </div>
                <div>
                    <img src={BoraBora2} alt='/' />
                </div>
                <div>
                    <img src={Maldives} alt='/' />
                </div>
            </Carousel>
        </div>


    )
}

export default ImgCarousel
