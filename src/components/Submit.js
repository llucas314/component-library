import React from "react";
import "./Submit.css";
import InputField from "./InputField";
import Button from "./Button";

const Submit = (props) => {
	return (
		<div>
			<InputField name={props.name} changeValue={props.changeValue} submit />
			<Button type={props.type} label={props.label} />
		</div>
	);
};

export default Submit;