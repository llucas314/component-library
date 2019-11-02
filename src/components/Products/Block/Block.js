import React, { Component } from "react";
import "./Block.css";
import Icon from "../../Icons/Icon";
import mac from "../../Icons/icon-img/mac.png";
import beats from "../../Icons/icon-img/beats.png";
import Button from "../../Buttons/Button";

export default class Block extends Component {
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
		let classList = "block-container";
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
					<div className="modal-div-container">
						<div className="modal-div">
							<Button type="primary" icon={this.state.like} />
						</div>
						<div className="modal-div">
							<Button type="primary" icon={this.state.cart} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
