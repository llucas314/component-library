import React from "react";
import "./InputField.css";

const InputField = (props) => {
	return (
		<div>
			<label>{props.name || "Email"}</label>
			<br></br>
			<input
				type="text"
				placeholder={props.name || "Email"}
				onChange={props.changeValue}
			/>
		</div>
	);
};

export default InputField;
