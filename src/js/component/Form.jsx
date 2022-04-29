import React, { useState } from "react";

const Form = () => {
	const [task, setTask] = React.useState("");

	return (
		<form>
			<input
				value={task}
				onChange={(event) => setTask(event.currentTarget.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						const newList = [...list, task];
						setList(newList);
						setTask("");
					}
				}}
			/>
		</form>
	);
};

export default Form;
