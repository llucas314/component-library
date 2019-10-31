import React from "react";
import "./Button.css";
// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
	let classList = "";
	let types = ["primary", "danger", "warning", "success", "default"];
	if (types.includes(props.type)) {
		classList += ` button-${props.type}`;
	}
	if (props.large) {
		classList += " button-large";
	}
	if (props.outline) {
		classList += " button-outline";
	}
	if (props.faded) {
		classList += " button-faded";
	}
	if (props.red) {
		classList += " button-red";
	}
	return <button className={classList}>Do Something</button>;
};

export default Button;
