//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Body from "./component/body.jsx";
import ToDoList from "./component/ToDoList.jsx";

class App extends React.Component {
	render() {
		return (
			<div>
				<Home />
				<Body />
				<ToDoList />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#app"));
