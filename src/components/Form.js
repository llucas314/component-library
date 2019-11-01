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
	componentDidMount() {
		if (this.props.options) {
			this.setState({ value: this.props.options[0] });
		}
	}

	render() {
		let classList = "form-container";
		if (this.props.large) {
			classList += " form-large";
		}
		if (this.props.small) {
			classList += " form-small";
		}
		if (this.props.type === "text") {
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
		} else if (this.props.type === "select") {
			return (
				<div className={classList}>
					<form onSubmit={this.handleSubmit}>
						<label>{this.props.name || "Select"}</label>
						<br></br>
						<select>
							{this.props.options.map((option) => (
								<option key={option} value={option} onChange={this.changeValue}>
									{option}
								</option>
							))}
						</select>
					</form>
				</div>
			);
		} else return "";
	}
}
export default Form;