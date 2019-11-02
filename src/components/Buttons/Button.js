import React from "react";
import "./Button.css";
import Icon from "../Icon/Icon";

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
	if (props.icon) {
		if (props.icon && props.label) {
			classList += " button-icon-text";
		} else classList += " button-icon";
	}
	return (
		<div className="button-container">
			<button type="submit" className={classList} onClick={props.onClick}>
				<Icon icon={props.icon} />
				{props.label}
			</button>
		</div>
	);
};

export default Button;
