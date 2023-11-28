import "./App.css";
import { useState } from "react";
import Box from "./components/Box/Box";
import Values from "./components/Values/Values";
import ValueContext from "./ValueContext";

function App() {
	const [borderValues, setBorderValues] = useState([0, 0, 0, 0]);

	return (
		<ValueContext.Provider value={[borderValues, setBorderValues]}>
			<div className="App">
				<Box />
				<Values />
			</div>
		</ValueContext.Provider>
	);
}

export default App;
