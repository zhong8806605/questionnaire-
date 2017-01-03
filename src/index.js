import React , {Component} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import store from "./reducers/Store/store"
import APP from "./containers/APP"
import Edit from "./containers/Edit"
import "./style/reset"
import Title from "./components/Title"
class Root extends Component{
	constructor(){
		super();
	}
	render(){
		return <div>{this.props.children}</div>;
	} 
}

render(
  <Provider store={store}>
 	<Router history={hashHistory}>
        <Route path="/" component={Root}>
            <IndexRoute component={APP} />
            <Route path="/edit" component={Edit}/>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
