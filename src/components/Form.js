import React, { Component } from "react";
import "./Form.css";
import InputField from "./InputField";
import Select from "./Select";
import Counter from "./Counter";

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
						<InputField name={this.props.name} changeValue={this.changeValue} />
					</form>
				</div>
			);
		} else if (this.props.type === "select") {
			return (
				<div className={classList}>
					<form onSubmit={this.handleSubmit}>
						<Select
							name={this.props.name}
							options={this.props.options}
							changeValue={this.changeValue}
						/>
					</form>
				</div>
			);
		} else if (this.props.type === "number") {
			return (
				<div className={classList}>
					<form onSubmit={this.handleSubmit}>
						<Counter
							count={this.props.count}
							step={this.props.step}
							max={this.props.max}
							min={this.props.min}
						/>
					</form>
				</div>
			);
		} else return <div></div>;
	}
}
export default Form;
