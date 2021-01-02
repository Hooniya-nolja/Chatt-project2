import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Route } from 'react-router-dom';
import ClassList from './routes/ClassList';
import Home from './routes/Home';
import Introduction from './routes/Introduction';
import MyClass from './routes/MyClass';
import Profile from './routes/Profile';
import Navigation from './components/Navigation';
import SignIn from './components/authentication/SignIn';

function App() {
  const notSupported = useMediaQuery({
    query: "(min-width: 768px)"
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)"
  })
  return (
    <div>
      { notSupported && <h1>모바일 환경만 지원됩니다.</h1>}
      { isMobile && 
        <div>
          <Navigation />
          <Route path="/" exact={true} component={Home} />
          <Route path="/introduction" exact={true} component={Introduction} />
          <Route path="/classList" exact={true} component={ClassList} />
          <Route path="/myClass" exact={true} component={MyClass} />
          <Route path="/profile" exact={true} component={Profile} />
          <Route path="/signIn" exact={true} component={SignIn} />
        </div>
      }
    </div>
  );
}

export default App;
