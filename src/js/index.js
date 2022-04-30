import React from "react";
import ReactDOM from "react-dom";

import "../styles/index.css";

import Home from "./component/Home.jsx";

ReactDOM.render(<Home />, document.querySelector("#app"));

// class App extends React.Component {
// 	render() {
// 		return (
// 			<div className="mytodolist container">
// 				<header>
// 					<h1>My to do list</h1>
// 				</header>
// 				<Form />
// 				<ToDoList />
// 			</div>
// 		);
// 	}
// }

//import your own components
// import Form from "./component/Form.jsx";
// import ToDoList from "./component/ToDoList.jsx";
