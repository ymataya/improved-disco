import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Search from './pages/Search';
import Home from "./pages/Home";
import Save from "./pages/Saved";

function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/search" component={Search}/>
    <Route exact path="/saved" component={Save}/>
    </div>
    </Router>
  
  );
}

export default App;
