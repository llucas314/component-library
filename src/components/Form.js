import React, { Component } from "react";
import "./Form.css";
import InputField from "./InputField";
import Select from "./Select";
import Counter from "./Counter";
import Submit from "./Submit";
import Checkbox from "./Checkbox";

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
		if (this.props.formType === "text") {
			return (
				<div className={classList}>
					<form onSubmit={this.handleSubmit}>
						<InputField name={this.props.name} changeValue={this.changeValue} />
					</form>
				</div>
			);
		} else if (this.props.formType === "select") {
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
		} else if (this.props.formType === "number") {
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
		} else if (this.props.formType === "submit") {
			return (
				<div className={classList}>
					<form onSubmit={this.handleSubmit}>
						<Submit
							name={this.props.name}
							changeValue={this.changeValue}
							type={this.props.type}
							label={this.props.label}
						/>
					</form>
				</div>
			);
		} else if (this.props.formType === "check") {
			return (
				<div className={classList}>
					<form onSubmit={this.handleSubmit}>
						<Checkbox
							name={this.props.name}
							value={this.props.value}
							onChange={this.changeValue}
							message={this.props.message}
						/>
					</form>
				</div>
			);
		} else return <div></div>;
	}
}
export default Form;
