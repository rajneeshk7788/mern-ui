import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Footer from './component/Footer';
import Navebar from './component/Navebar';
import Contact from './component/Contact';
import About from './component/About';
import Home from './component/Home';
import Signup from './component/Signup';
import Switch from 'react-bootstrap-v5/lib/esm/Switch';
import Login from './component/Login';
// import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <Router>
      <Navebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
