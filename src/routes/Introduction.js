import React from 'react';
import { Link } from 'react-router-dom';
import './Introduction.css'
import INTRODUCTIONPAGE from '../components/img/introduction_page.png';

class Introduction extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="container_top">
                    <Link to="/">
                        <div className="top_content" id="goback_icon">{'<'}</div>
                    </Link>                   
                    <div className="top_content" id="title">찾트 소개</div>
                </div>
                <div className="container_content">
                    <img class="introduction_page" src={INTRODUCTIONPAGE}/>
                    <div className="button_container">
                        <div className="description">찾트와 함께 운동하세요!</div>
                        <Link to="/courseList">
                            <button className="goto_classList_button">강의 둘러보기</button>
                        </Link>
                    </div>
                    <div className="blankspace"/>
                </div>
            </div>
        );
    }
}
export default Introduction;