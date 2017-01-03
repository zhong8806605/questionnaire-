import React from "react";

export default class Question extends React.Component{

	render(){
		return  <div>
					<div><label>Q:</label><input typ="text" /></div>
					<ul>
						<li><input type="text" placeholder="选项1"/>删除选项</li>
					</ul>
				</div>
	}
}