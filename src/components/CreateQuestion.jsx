import React from "react"
import Title from "./Title"
import Question from "./Question"
import "../style/CreateQuestion.css";

export default class CreateQuestion extends React.Component{
	constructor(){
		super();
	}
	render(){
		return 	<div>
					<Title/>
					<div className = "CreateQuestionAre">
						<div><input className = "CreateQuestionTitle" type = "text" value ={this.props.quesTitle} placeholder="问题标题" /></div>	
						{this.props.QuesArry}
						<Question />
						<div className = "CreateQuestionAddQues">添加问题</div>
						<div className = "CreateQuestionAddQues">保存问卷</div>
			  		</div>
			  	</div>

	}
}

