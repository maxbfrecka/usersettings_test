var React = require('react');
var ReactDOM = require('react-dom');

import { OpacityRange } from './components/App';




class TestApp extends React.Component {
  render() {
    return (
    	<OpacityRange/>
    );
  }
}




ReactDOM.render(
	<TestApp/>,
	document.getElementById('app')
);