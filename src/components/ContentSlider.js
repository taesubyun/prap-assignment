import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';

function ContentSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src='./assets/sliderImg1.png' width='100%' />
            </Wrap>
            <Wrap>
                <img src='./assets/sliderImg2.png' width='100%' />
            </Wrap>
            <Wrap>
                <img src='./assets/sliderImg3.png' width='100%' />
            </Wrap>
        </Carousel>
    );
}

export default ContentSlider;

const Carousel = styled(Slider)`
     ;
`;
const Wrap = styled.div`
    /* image {
    } */
`;
