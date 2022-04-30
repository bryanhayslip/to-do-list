export async function getToDos() {
	const response = await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/bryanhayslip"
	);
	const payload = await response.json();

	return payload;
}

export async function createToDos() {
	await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/bryanhayslip",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([]),
		}
	);
}

export async function putToDos(todos) {
	const update = await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/bryanhayslip",
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(todos),
		}
	);
	return update;
}

export async function deleteToDos() {
	const response = await fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/bryanhayslip",
		{
			method: "DELETE",
		}
	);
}
