import React, { Component } from "react";
import "./Checkbox.css";
import Icon from "../../Icon/Icon";

class Checkbox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cssClass: "unchecked-container",
		};
		this.toggleClass = this.toggleClass.bind(this);
	}
	toggleClass = () => {
		if (this.state.cssClass === "unchecked-container") {
			this.setState({ cssClass: "checked-container" });
		} else {
			this.setState({ cssClass: "unchecked-container" });
		}
	};

	render() {
		return (
			<div className="label-check-container">
				<div className={this.state.cssClass}>
					<Icon icon="checkmark" />
					<input
						type="checkbox"
						className="checkbox"
						id={this.props.name}
						name={this.props.name}
						value={this.props.value}
						onChange={this.props.changeValue}
						onChange={this.toggleClass}
					/>
				</div>
				<label for={this.props.name}>{this.props.message}</label>
			</div>
		);
	}
}

export default Checkbox;
