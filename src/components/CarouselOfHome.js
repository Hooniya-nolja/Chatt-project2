import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import TRAINERIMG from './img/trainer_img.png';
import './CarouselOfHome.css';
import axios from 'axios';
const dataURL = 'http://chatt.ngrok.io/api/course/populars/';

export default class Test extends React.Component {
    state = {
        datas: [],
    };
    getTopClasses = async() => {
        const { data } = await axios.get(dataURL);
        this.setState( {datas: data });
    }
    componentWillMount() {
        this.getTopClasses();
        this.setState({
        children: [],
        activeItemIndex: 0,
        });
        setTimeout(() => {
            this.setState({
                children: this.state.datas.map((data) => 
                <div class="oneclass_container">
                    <div class="oneclass_keyword_container">
                        <div class="oneclass_keyword" id="type">방문</div>
                        <div class="oneclass_keyword" id="hashtag">#필라테스</div>
                    </div>
                    <div class="oneclass_description">
                        {data.information}
                    </div>
                    <div class="oneclass_trainer">
                        <img class="oneclass_trainer_img" src={TRAINERIMG}/>
                        <div class="oneclass_trainer_name">{data.teacher.name}</div>
                    </div>
                </div>),
            })
        }, 1000);
    }
    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });
  
    render() {
        const {
        activeItemIndex,
        children,
        } = this.state;
        return (
            <ItemsCarousel
                numberOfCards={1}
                gutter={180}
                showSlither={true}
                firstAndLastGutter={false}
                freeScrolling={true}
                requestToChangeActive={this.changeActiveItem}
                activeItemIndex={activeItemIndex} //ignored
                activePosition={'right'} //ignored
            >
            {children}
            </ItemsCarousel>
      );  
    }
} 