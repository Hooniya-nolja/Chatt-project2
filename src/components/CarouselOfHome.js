import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import TRAINERIMG from './img/trainer_img.png';
import './CarouselOfHome.css';

export default class Test extends React.Component {
    componentWillMount() {
        this.setState({
        children: [],
        activeItemIndex: 0,
    });
    
    setTimeout(() => {
        this.setState({
            children: range(3).map(i => 
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
            </div>),
        })
    }, 100);
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
                gutter={165}
                showSlither={true}
                firstAndLastGutter={false}
                freeScrolling={true}
                requestToChangeActive={this.changeActiveItem}
                activeItemIndex={activeItemIndex}
                activePosition={'left'}
            >
            {children}
            </ItemsCarousel>
      );  
    }
} 
