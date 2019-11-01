import React, { Component } from "react";
import "./Inline.css";
import Icon from "./Icon";
import mac from "./icons/mac.png";
import beats from "./icons/beats.png";
import Button from "./Button";

export default class Inline extends Component {
	constructor(props) {
		super(props);

		this.state = {
			star: 4,
			image: mac,
			like: "like",
			cart: "cart",
		};
	}

	render() {
		if (this.props.name === "beats" && this.state.image === mac) {
			this.setState({ image: beats });
		}
		let classList = "inline-container";
		if (this.props.gray) {
			classList += " gray";
			if (this.state.like === "like") {
				this.setState({ like: "whiteLike", cart: "whiteCart" });
			}
		}
		if (this.props.row) {
			classList += " row";
		}
		return (
			<div className={classList}>
				<div className="inline-product">
					<div className="img-div">
						<div className="hot">HOT</div>
						<img src={this.state.image} alt={this.props.name}></img>
					</div>

					<div className="info-div">
						<div className="title-container">
							<h4>{this.props.title}</h4>
							<div className="review-container">
								<div className="rating-div">
									<Icon icon="star" />
									<Icon icon="star" />
									<Icon icon="star" />
									<Icon icon="star" />
									<Icon icon="star" />
								</div>
								<div className="review">0 reviews</div>
								<div className="sub-review">Submit a review</div>
							</div>
						</div>
						<div className="price-div">
							<h3 className="sale">{this.props.sale}</h3>
							<h3 className="original">{this.props.original}</h3>
						</div>
						<p className="item-description">{this.props.description}</p>
					</div>
				</div>
				<div className="block-modal">
					<div className="modal-div">
						<Button type="primary" icon={this.state.like} outline />
					</div>
					<div className="modal-div">
						<Button type="primary" icon={this.state.cart} outline />
					</div>
				</div>
			</div>
		);
	}
}
