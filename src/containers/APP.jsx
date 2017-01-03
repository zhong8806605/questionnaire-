import React, {Component} from "react";
import {Link} from "react-router"
import Title from "../components/Title"
import Control from "../components/Control"

export default  class App extends Component{
	render(){
		return  <div>
					<Title />
					<Control />
				</div>
	}
}