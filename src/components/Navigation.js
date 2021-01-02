import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'
import HOME_ICON_ACTIVE from './icon/홈_A.png';
import CLASSLIST_ICON_ACTIVE from './icon/둘러보기_A.png';
import MYCLASS_ICON_ACTIVE from './icon/내강의실_A.png';
import PROFILE_ICON_ACTIVE from './icon/프로필_A.png';
import HOME_ICON from './icon/홈.png';
import CLASSLIST_ICON from './icon/둘러보기.png';
import MYCLASS_ICON from './icon/내강의실.png';
import PROFILE_ICON from './icon/프로필.png';

function Navigation() {
  return (
    <div className="nav">
      <Link className="button" to="/">
        <img className="button-icon" src={HOME_ICON_ACTIVE}/>
        <div className="button-text" id="active">홈</div>
      </Link>
      <Link className="button" to="/classList">
        <img className="button-icon" src={CLASSLIST_ICON}/>
        <div className="button-text">둘러보기</div>
      </Link>
      <Link className="button" to="/myClass">
        <img className="button-icon" src={MYCLASS_ICON}/>
        <div className="button-text">내 강의실</div>
      </Link>
      <Link className="button" to="/profile">
        <img className="button-icon" src={PROFILE_ICON}/>
        <div className="button-text">프로필</div>
      </Link>
    </div>
  );
}

export default Navigation;
