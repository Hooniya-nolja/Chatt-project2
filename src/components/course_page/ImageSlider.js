import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import COURSE_DETAIL_IMG from '../img/course_detail_img.png';
import COURSE_DETAIL_IMG2 from '../img/course_detail_img2.png';
import COURSE_DETAIL_IMG3 from '../img/course_detail_img3.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ImageSlider(image) {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDot: dots => (
            // <div
            //  style={{
            //      backgroundColor: 'gray',
            //      padding: 0,
            //      margin: 0
            //  }}
            // >
                <ul style={{ color: "#3f4fa5" , padding: 0, margin: 0}}>{dots}</ul>
            // </div>
        )
    };

    return (
        <Container>
            <Slider {...settings}>
                <div><img src={COURSE_DETAIL_IMG} style={{width: '100%', height: '240px'}} alt=''></img></div>
                <div><img src={COURSE_DETAIL_IMG2} style={{width: '100%', height: '240px'}} alt=''></img></div>
                <div><img src={COURSE_DETAIL_IMG3} style={{width: '100%', height: '240px'}} alt=''></img></div>
            </Slider>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  height: 240px;
  ${'' /* overflow: hidden; */}
`;

export default ImageSlider;