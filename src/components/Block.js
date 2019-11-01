import React, { Component } from "react";
import "./Block.css";
import Icon from "./Icon";
import mac from "./icons/mac.png";
import beats from "./icons/beats.png";
import Button from "./Button";

export default class Block extends Component {
	constructor(props) {
		super(props);

		this.state = {
			star: 4,
			image: mac,
		};
	}

	render() {
		if (this.props.name == beats) {
			this.setState({ image: beats });
		}
		return (
			<div className="block-container">
				<div className="block-product">
					<div className="img-div">
						<img src={this.state.image} alt={this.props.name}></img>
					</div>
					<div className="bar"></div>
					<div className="info-div">
						<h4>{this.props.title}</h4>
						<div className="rating-div">
							<Icon icon="star" />
							<Icon icon="star" />
							<Icon icon="star" />
							<Icon icon="star" />
							<Icon icon="star" />
						</div>
						<div className="price-div">
							<h3 className="sale">{this.props.sale}</h3>
							<h3 className="original">{this.props.original}</h3>
						</div>
					</div>
				</div>
				<div className="block-modal">
					<div className="modal-div">
						<Button type="primary" icon="like" />
					</div>
					<div className="modal-div">
						<Button type="primary" icon="cart" />
					</div>
				</div>
			</div>
		);
	}
}
