import React,{Component} from "react";
import {connect} from "react-redux";
import Change from "../actions";
import CreateQuestion from "../components/CreateQuestion"
class Edit extends Component{
	render(){
		console.log(this.props.number);
		return <CreateQuestion/>;
	}
}

const mapStateToProps = (state)=>{
	console.log(state.Test,2);
	return {
		number:state.Test.text
	}
}

const mapDispatchToProps = ({
	onChange:(number)=>({
		type:'Change',
		number
	})
})

const EditPage = connect(
	mapStateToProps,
	mapDispatchToProps
)(Edit)

export default EditPage