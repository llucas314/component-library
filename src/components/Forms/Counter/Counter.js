import React, { Component } from "react";
import "./Counter.css";
import Icon from "../../Icons/Icon";

export default class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: this.props.count,
		};
		this.decreaseCount = this.decreaseCount.bind(this);
		this.increaseCount = this.increaseCount.bind(this);
	}
	decreaseCount = () => {
		let decrease = this.state.count - this.props.step;
		if (decrease >= this.props.min) {
			this.setState({ count: decrease });
		}
	};
	increaseCount = () => {
		let increase = this.state.count + this.props.step;
		if (increase <= this.props.max) {
			this.setState({ count: increase });
		}
	};

	render() {
		return (
			<div className="counter-container">
				<button onClick={this.decreaseCount}>
					<Icon icon="minus" />
				</button>
				<h1>{this.state.count}</h1>
				<button onClick={this.increaseCount}>
					<Icon icon="add" />
				</button>
			</div>
		);
	}
}
