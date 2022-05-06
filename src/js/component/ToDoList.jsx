import React from "react";
import { getToDos, putToDos } from "../api";

export const ToDoList = () => {
	const [todos, setTodos] = React.useState([]);
	const [task, setTask] = React.useState("");

	React.useEffect(() => {
		const fn = async () => {
			const apiTodos = await getToDos();
			setTodos(apiTodos.map((x) => x.label));
		};
		fn();
	}, []);

	React.useEffect(() => {
		const fn = async () => {
			await putToDos(todos.map((x) => ({ label: x, done: false })));
		};

		fn();
	}, [todos]);

	const removeToDo = (index) => {
		const fn = async () => {
			await setTodos(todos.filter((item, i) => index != i));
		};

		fn();
	};

	return (
		<div className="body">
			<div className="container">
				<div className="todoapp">
					<header>Create Your To Do List</header>
					<input
						value={task}
						onChange={(ev) => setTask(ev.currentTarget.value)}
						onKeyDown={(ev) => {
							if (ev.key === "Enter") {
								setTodos([...todos, task]);
								setTask("");
							}
						}}
					/>
					<ul>
						{todos.map((todo, index) => (
							<li key={index}>
								{todo}
								<button onClick={() => removeToDo(index)}>
									Delete
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
