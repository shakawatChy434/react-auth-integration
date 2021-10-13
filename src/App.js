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
import AuthProvider from './context/AuthProvider';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Placeorder from './components/Placeorder/Placeorder';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/"><Home></Home> </Route>
            <Route path="/home"><Home></Home> </Route>
            <Route path="/register"><Register></Register> </Route>
            <Route path="/login"><Login></Login> </Route>
            <PrivateRoute path="/shipping"><Shipping></Shipping></PrivateRoute>
            <PrivateRoute path="/placeorder"><Placeorder></Placeorder></PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
