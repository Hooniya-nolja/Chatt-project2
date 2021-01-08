import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css'
import CarouselOfHome from '../components/CarouselOfHome';
import INTRODUCTION from '../components/img/introduction.png';
const dataURL = 'http://chatt.ngrok.io/api/course/populars/';

function Home() {
    const [topClasses, setTopClasses] = useState(null);
    async function getTopClasses() {
        const { data } = await axios.get(dataURL);
        setTopClasses(data);
        console.log(data);
    }
    useEffect(() => {
        getTopClasses();
    }, [topClasses]);
    return (
        <div class="container">
            <div class="introduction_container">
                <img class="introduction_paper" src={INTRODUCTION}/>
                <Link to="/introduction">
                    <button class="introduction_button">서비스 소개 {'>'}</button>
                </Link>
            </div>
            <div class="topclass_container">
                <div class="topclass_top">
                    <div class="topclass_title">찾트의 인기 강의 TOP3</div>
                    <Link to="/classList">
                        <div class="topclass_more">더보기 {'>'}</div> 
                    </Link>
                </div>
                <div class="topclass_content_container">
                    <CarouselOfHome/>
                </div>
                <div className="blankspace"/>
            </div>
        </div>
    );
}
export default Home;