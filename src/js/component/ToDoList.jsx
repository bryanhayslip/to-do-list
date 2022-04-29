import React, { useState } from "react";

const ToDoList = () => {
	const [list, setList] = React.useState([]);
	return (
		<div className="todo-container">
			<ul>
				{list.map((item, index) => {
					return (
						<li key={index}>
							{item}{" "}
							<button
								onClick={() => {
									const newList = list.filter(
										(item, j) => index != j
									);
									setList(newList);
								}}></button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default ToDoList;
