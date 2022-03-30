import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';

function ContentSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <Carousel {...settings}>
            <Wrap>
                <img src='/assets/imageslider1.png' />
            </Wrap>
            <Wrap>
                <img src='/assets/imageslider2.png' />
            </Wrap>
            <Wrap>
                <img src='/assets/imageslider3.png' />
            </Wrap>
        </Carousel>
    );
}

export default ContentSlider;

const Carousel = styled(Slider)``;
const Wrap = styled.div`
    image {
        // 가,세로 % 미정
    }
`;
