import React from "react";

const Checkbox = (props) => {
	return (
		<div>
			<input
				type="checkbox"
				id={props.name}
				name={props.name}
				value={props.value}
				onChange={props.changeValue}
			/>
			<label for={props.name}>{props.message}</label>
		</div>
	);
};

export default Checkbox;
