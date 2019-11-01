import React from "react";
import "./Select.css";

const Select = (props) => {
	return (
		<div>
			<label>{props.name || "Select"}</label>
			<br></br>
			<select>
				{props.options.map((option) => (
					<option key={option} value={option} onChange={props.changeValue}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
