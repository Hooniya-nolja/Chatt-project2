import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import INTRODUCTION from '../components/img/introduction.png';
import TRAINERIMG from '../components/img/trainer_img.png';

class Home extends React.Component {
    render() {
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
                        <div class="oneclass_container">
                            <div class="oneclass_keyword_container">
                                <div class="oneclass_keyword" id="type">방문</div>
                                <div class="oneclass_keyword" id="hashtag">#필라테스</div>
                            </div>
                            <div class="oneclass_description">
                                바른자세 맑은정신을 위한 운동! 시작해보세요.
                            </div>
                            <div class="oneclass_trainer">
                                <img class="oneclass_trainer_img" src={TRAINERIMG}/>
                                <div class="oneclass_trainer_name">제니퍼 트레이너</div>
                            </div>
                        </div>
                    </div>
                    <div className="blankspace"/>
                </div>
            </div>
        );
    }
}
export default Home;