import './app.css';
import Login from './components/login/login';
import Home from './components/home/home';
import ClassList from './components/classList/classList';
import { Switch, Route} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';

function App({firebase}) {
  const history = useHistory();
  const [userId, setUserId] = useState('');
  useEffect(() => {
    firebase.authObserver(user => {
      if(user){
        setUserId(user.uid);
        history.push('/class-List');
      }
      else{
        history.push('/');
      }
    })
  }, []);

  return (
    <Switch>
      <Route path="/sign-In">
        <Login firebase={firebase} />
      </Route>
      <Route path="/class-List">
        <ClassList firebase={firebase} user={userId}/>
      </Route>
      <Route path="/">
        <Home firebase={firebase} />
      </Route>
    </Switch>
  );
}

export default App;
