import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css'
import CarouselOfHome from '../components/CarouselOfHome';
import INTRODUCTION from '../components/img/introduction.png';

function Home() {
    return (
        <div className="container">
            <div className="introduction_container">
                <img className="introduction_paper" src={INTRODUCTION}/>
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
                    <CarouselOfHome/>
                </div>
                <div className="blankspace"/>
            </div>
        </div>
    );
}
export default Home;