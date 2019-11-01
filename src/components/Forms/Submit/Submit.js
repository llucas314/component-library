import React from "react";
import "./Submit.css";
import InputField from "../Input/InputField";
import Button from "./Button";

const Submit = (props) => {
	return (
		<div className="submit-container">
			<InputField name={props.name} changeValue={props.changeValue} submit />
			<Button type={props.type} label={props.label} />
		</div>
	);
};

export default Submit;
