import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/"><Home></Home> </Route>
          <Route path="/home"><Home></Home> </Route>
          <Route path="/register"><Register></Register> </Route>
          <Route path="/login"><Login></Login> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
