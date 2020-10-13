import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import CreateWish from './component/create-wish';
import ToyList from './component/list';
import EditList from './component/edit-list';

class App extends Component {
  render(){
    return(
          <Router>
              <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                       <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
                         <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
                       </a>
                       <Link to="/" className="navbar-brand">Santa Wish List</Link>
                       <div className="collpase navbar-collapse">
                         <ul className="navbar-nav mr-auto">
                           <li className="navbar-item">
                             <Link to="/toylist" className="nav-link">Toy List</Link>
                           </li>
                           <li className="navbar-item">
                             <Link to="/edit" className="nav-link">Add Toy</Link>
                           </li>
                         </ul>
                       </div>
                     </nav>
                     <br/>


                <Route path="/" exact component={CreateWish} />
                <Route path="/toylist" component={ToyList} />
                <Route path="/edit" component={EditList} />
              </div>
           </Router>
    )
  }
}

export default App;
