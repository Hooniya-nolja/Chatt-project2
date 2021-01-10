import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Route } from 'react-router-dom';
import ClassList from './routes/ClassList';
import Home from './routes/Home';
import Introduction from './routes/Introduction';
import MyClass from './routes/MyClass';
import MyPage from './routes/MyPage';
import Navigation from './components/Navigation';
import SignIn from './components/authentication/SignIn';
import Pay_1 from './pages/pay/Pay_1';
import Pay_2 from './pages/pay/Pay_2';
import Pay_3 from './pages/pay/Pay_3';
import Pay_4 from './pages/pay/Pay_4';
import Pay_5 from './pages/pay/Pay_5';
import CoursePage from './components/course_page/CoursePage';

function App() {
  const notSupported = useMediaQuery({
    query: "(min-width: 380px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 380px)"
  })
  return (
    <div style={{width: '100%', height: '100%'}}>
      { notSupported && <h1>모바일 환경만 지원됩니다.</h1>}
      { isMobile && 
        <div>
          {/* <Navigation/> */}
          <Route path="/" exact={true} component={Navigation} />
          <Route path="/" exact={true} component={Home} />

          <Route path="/introduction" exact={true} component={Navigation} />
          <Route path="/introduction" exact={true} component={Introduction} />

          <Route path="/classList" exact={true} component={Navigation} />
          <Route path="/classList" exact={true} component={ClassList} />

          <Route path="/myClass" exact={true} component={Navigation} />
          <Route path="/myClass" exact={true} component={MyClass} />

          <Route path="/myPage" exact={true} component={Navigation} />
          <Route path="/myPage" exact={true} component={MyPage} />

          <Route path="/signIn" exact={true} component={Navigation} />
          <Route path="/signIn" exact={true} component={SignIn} />

          <Route path="/course/1/profile" exact={true} component={Navigation} />
          <Route path="/course/1/profile" exact={true} component={CoursePage} />
          <Route path="/course/1/introduction" exact={true} component={Navigation} />
          <Route path="/course/1/introduction" exact={true} component={CoursePage} />
          <Route path="/course/1/plan" exact={true} component={Navigation} />
          <Route path="/course/1/plan" exact={true} component={CoursePage} />

          <Route path="/pay/1" exact={true} component={Navigation} />
          <Route path="/pay/1" exact={true} component={Pay_1} />

          <Route path="/pay/2" exact={true} component={Navigation} />
          <Route path="/pay/2" exact={true} component={Pay_2} />

          <Route path="/pay/3" exact={true} component={Navigation} />
          <Route path="/pay/3" exact={true} component={Pay_3} />

          <Route path="/pay/4" exact={true} component={Navigation} />
          <Route path="/pay/4" exact={true} component={Pay_4} />

          <Route path="/pay/5" exact={true} component={Navigation} />
          <Route path="/pay/5" exact={true} component={Pay_5} />
        </div>
      }
    </div>
  );
}

export default App;
