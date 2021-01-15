import React, {useState, useEffect} from 'react';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css'
import CarouselOfHome1 from '../components/CarouselOfHome-1';
import CarouselOfHome2 from '../components/CarouselOfHome-2';
import CarouselOfHome3 from '../components/CarouselOfHome-3';
import INTRODUCTION from '../components/img/introduction.png';
import HOME_BACKGROUND from '../components/img/home_background.svg';

function Home() {
    const ONE = useMediaQuery({
        query: "(min-width: 373px)",
      });
      const TWO = useMediaQuery({
        query: "(max-width: 373px && min-width: 365px)",
      });
      const THREE = useMediaQuery({
        query: "(max-width: 365px)",
      });
    return (
        <div className="container">
            <div className="introduction_container">
                <img className="introduction_paper" src={HOME_BACKGROUND}/>
                <Link to="/introduction">
                    <button className="introduction_button">서비스 소개 {'>'}</button>
                </Link>
            </div>
            <div className="topclass_container">
                <div className="topclass_top">
                    <div className="topclass_title">찾트의 인기 강의 TOP3</div>
                    <Link to="/courseList">
                        <div className="topclass_more">더보기 {'>'}</div> 
                    </Link>
                </div>
                <div className="topclass_content_container">
                    { ONE && <CarouselOfHome1/> }
                    { TWO && <CarouselOfHome2/> }
                    { THREE && <CarouselOfHome3/> }
                </div>
                <div className="blankspace"/>
            </div>
        </div>
    );
}
export default Home;