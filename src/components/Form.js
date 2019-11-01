import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		};
		this.changeValue = this.changeValue.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	changeValue = (e) => this.setState({ value: e.target.value });
	handleSubmit = (e) => e.preventDefault();

	render() {
		let classList = "form-container";
		if (this.props.large) {
			classList += " form-large";
		}
		if (this.props.small) {
			classList += " form-small";
		}
		return (
			<div className={classList}>
				<form onSubmit={this.handleSubmit}>
					<label>{this.props.name || "Email"}</label>
					<br></br>
					<input
						type={this.props.type}
						placeholder={this.props.name || "Email"}
						onChange={this.changeValue}
					/>
				</form>
			</div>
		);
	}
}
export default Form;
