import React from 'react';
import "../style/title.css";
import {Link} from "react-router"
export default class Title extends React.Component{
	constructor(){
		super();
	}
	render(){
		return <div className="title">
					<Link to = "/"><h2 className="myQuestionnaire">我的问卷</h2></Link>
				</div>;
	}
};