import React from "react";

const Select = (props) => {
	return (
		<div>
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
