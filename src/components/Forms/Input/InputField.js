import React from "react";
import "./InputField.css";

const InputField = (props) => {
	if (props.submit) {
		return (
			<div>
				<input
					type="text"
					placeholder={props.name || "Email"}
					onChange={props.changeValue}
				/>
			</div>
		);
	}
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
