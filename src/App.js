import React, { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	setTimeout(() => {
		setCount(count + 1);
	}, 1000);

	return (
		<section className="App">
			<p>Minęło</p>
			<h1>{count} s.</h1>
			<p>odkąd tu jesteś.</p>
		</section>
	);
}

export default App;
