import React from "react";
import "./Button.css";
// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
	let classList = "";
	let types = ["primary", "danger", "warning", "success"];
	if (types.includes(props.type)) {
		classList += ` button-${props.type}`;
	}
	if (props.large) {
		classList += " button-large";
	}
	if (props.outline) {
		classList += " button-outline";
	}
	return <button className={`button-${classList}`}>{props.label}</button>;
};

export default Button;
