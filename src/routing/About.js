import React, { Component } from "react";
import {Link} from "react-router-dom";
class About extends Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
            <br/>
            <Link to="/">Back</Link>
         </div>
      )
   }
}

export default About;