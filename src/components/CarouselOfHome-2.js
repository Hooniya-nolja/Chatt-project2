import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import './CarouselOfHome.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const dataURL = 'https://www.chatt-training.com/api/course/populars/';

export default class Test extends React.Component {
    state = {
        datas: [],
    };
    getTopClasses = async() => {
        const { data } = await axios.get(dataURL);
        this.setState( {datas: data });
    }
    UNSAFE_componentWillMount() {
        this.getTopClasses();
        this.setState({
        children: [],
        activeItemIndex: 0,
        });
        setTimeout(() => {
            this.setState({
                children: this.state.datas.map((data, index) => 
                    <Link to={{
                        pathname: '/course/1/profile',
                        state: {
                            courseData: data,
                        }
                    }}>
                        <div key={index} className="oneclass_container">
                            <div className="oneclass_keyword_container">
                                <div className="oneclass_keyword" id="type">방문</div>
                                <div className="oneclass_keyword" id="hashtag">#필라테스</div>
                            </div>
                            <div className="oneclass_description">
                                {data.name}
                            </div>
                            <div className="oneclass_trainer">
                                <img className="oneclass_trainer_img" src={data.teacher.image}/>
                                <div className="oneclass_trainer_name">{data.teacher.name} 트레이너</div>
                            </div>
                        </div>
                    </Link>
                ),
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
                gutter={170}
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