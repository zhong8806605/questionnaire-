import React from 'react'
import "../style/Control"
import {Link} from "react-router"
export default class Control extends React.Component{
	constructor(){
		super();
	}
	render(){
		return <div className="questionnaireHeader">
				<h3 className="headline">标题</h3>
				<h3 className="time">时间</h3>
				<h3 className="states">状态</h3>
				<Link to ="/edit"><button>创建问卷</button></Link>
				</div>
	}
}
