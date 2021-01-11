import React, {useState, useEffect} from 'react';
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
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  function handleCurrentPathChange(path){
    setCurrentPath(path);
  }
  return (
    <div className="nav">
      <Link className="button" to="/">
        { currentPath == "/" ? 
          <div>
            <img onClick={handleCurrentPathChange.bind(this,"/")} className="button-icon" src={HOME_ICON_ACTIVE}/>
            <div onClick={handleCurrentPathChange.bind(this,"/")} className="button-text" id="active">홈</div>
          </div>
          : 
          <div>
            <img onClick={handleCurrentPathChange.bind(this,"/")} className="button-icon" src={HOME_ICON}/>
            <div onClick={handleCurrentPathChange.bind(this,"/")} className="button-text">홈</div>
          </div>
        }
      </Link>
      <Link className="button" to="/courseList">
        { currentPath == "/courseList" ? 
          <div>
            <img onClick={handleCurrentPathChange.bind(this,"/courseList")} className="button-icon" src={CLASSLIST_ICON_ACTIVE}/>
            <div onClick={handleCurrentPathChange.bind(this,"/courseList")} className="button-text" id="active">둘러보기</div>
          </div>
          : 
          <div>
            <img onClick={handleCurrentPathChange.bind(this,"/courseList")} className="button-icon" src={CLASSLIST_ICON}/>
            <div onClick={handleCurrentPathChange.bind(this,"/courseList")} className="button-text">둘러보기</div>
          </div>
        }
      </Link>
      <Link className="button" to="/myClass">
        { currentPath == "/myClass" ? 
          <div>
            <img onClick={handleCurrentPathChange.bind(this,"/myClass")} className="button-icon" src={MYCLASS_ICON_ACTIVE}/>
            <div onClick={handleCurrentPathChange.bind(this,"/myClass")}className="button-text" id="active">내 강의실</div>
          </div>
          : 
          <div>
            <img onClick={handleCurrentPathChange.bind(this,"/myClass")} className="button-icon" src={MYCLASS_ICON}/>
            <div onClick={handleCurrentPathChange.bind(this,"/myClass")} className="button-text">내 강의실</div>
          </div>
        }
      </Link>
      <Link className="button" to="/myPage">
        { currentPath == "/myPage" ? 
          <div>
            <img onClick={handleCurrentPathChange.bind(this,"/myPage")} className="button-icon" src={PROFILE_ICON_ACTIVE}/>
            <div onClick={handleCurrentPathChange.bind(this,"/myPage")} className="button-text" id="active">프로필</div>
          </div>
          : 
          <div>
            <img onClick={handleCurrentPathChange.bind(this,"/myPage")} className="button-icon" src={PROFILE_ICON}/>
            <div onClick={handleCurrentPathChange.bind(this,"/myPage")} className="button-text">프로필</div>
          </div>
        }
      </Link>
    </div>
  );
}

export default Navigation;