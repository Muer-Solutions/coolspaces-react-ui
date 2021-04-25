import './App.css'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {

  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/register" exact component={Signup}/>
    </Switch>
  );
}

export default App;
