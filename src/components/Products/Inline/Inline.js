import React, { Component } from "react";
import "./Inline.css";
import Icon from "../../Icon/Icon";
import mac from "../../Icon/icons/mac.png";
import beats from "../../Icon/icons/beats.png";
import Button from "../../Buttons/Button";

export default class Inline extends Component {
	constructor(props) {
		super(props);

		this.state = {
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
								<a className="sub-review" href="#" target="_blank">
									Submit a review
								</a>
							</div>
						</div>
						<div className="inline-bar"></div>
						<div className="price-div">
							<h3 className="sale">{this.props.sale}</h3>
							<h3 className="original">{this.props.original}</h3>
						</div>
						<p className="item-description">{this.props.description}</p>
						<div className="buttons-inline">
							<Button icon="cart" type="primary" label="Add To Cart" faded />
							<Button icon="like" type="primary" faded />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
