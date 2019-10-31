import React from "react";

function Icon(props) {
	let icons = ["cart", "like"];
	let classList = "";
	if (icons.includes(props.icon)) {
		classList = `${props.icon}`;
	}
	return <div className={classList}></div>;
}

export default Icon;
