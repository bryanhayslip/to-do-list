import React from "react";

const ListInput = () => {
	const [toDo, setToDo] = useState("");
	const [list, setList] = useState([]);
	return (
		<div className="container">
			<input
				value={toDo}
				onChange={(event) => setToDo(event.currentTarget.value)}
			/>
		</div>
	);
};

export default ListInput;
