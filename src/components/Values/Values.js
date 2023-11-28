import "./Values.css";
import { useContext } from "react";
import ValueContext from "../../ValueContext";

const Values = () => {
	const [borderValues, setBorderValues] = useContext(ValueContext);
	const valueNames = ["Top Left", "Top Right", "Bottom Right", "Bottom Left"];

	const handleChange = (e, index) => {
		setBorderValues([
			...borderValues.slice(0, index),
			e.target.value !== "" ? e.target.value : 0,
			...borderValues.slice(index + 1),
		]);
	};

	return (
		<div className="values-container">
			{valueNames.map((name, index) => {
				return (
					<div className="row" key={index}>
						<p>{name}</p>
						<input
							type="number"
							onChange={(event) => {
								handleChange(event, index);
							}}
							value={borderValues[index]}
							min={0}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default Values;
