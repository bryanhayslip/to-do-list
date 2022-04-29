//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Form from "./component/Form.jsx";
import ToDoList from "./component/ToDoList.jsx";

class App extends React.Component {
	render() {
		return (
			<div className="mytodolist container">
				<header>
					<h1>My to do list</h1>
				</header>
				<Form />
				<ToDoList />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#app"));
