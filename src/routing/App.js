import React, { Component } from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import {  Switch,Link,Route } from 'react-router-dom';

class LinksComponent extends Component{
render(){
    return (<div>
            <ul>
               <li> <Link to="/home"> Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
				
       
         </div>);
}
}

class App1 extends Component{
    render(){
        return( <div>
         
         <div>
         <Switch>
            <Route exact path="/" component={LinksComponent}> </Route>
            <Route path="/home" component={Home}> </Route>
            <Route path="/about" component={About}> </Route>
            <Route path="/contact" component={Contact}> </Route>
        </Switch>
         </div>
         </div>);
    }
}

export default App1;