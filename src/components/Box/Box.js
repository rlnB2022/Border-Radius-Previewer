import "./Box.css";
import { useContext } from "react";
import ValueContext from "../../ValueContext";

const Box = () => {
	const [values, setValues] = useContext(ValueContext);

	const myStyle = {
		borderTopLeftRadius: values[0] + "px",
		borderTopRightRadius: values[1] + "px",
		borderBottomRightRadius: values[2] + "px",
		borderBottomLeftRadius: values[3] + "px",
	};

	return <div className="box-container" style={myStyle}></div>;
};

export default Box;
