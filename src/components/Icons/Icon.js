import React from "react";
import cart from "./icon-img/cart_2.svg";
import like from "./icon-img/hearts.svg";
import checkmark from "./icon-img/checkmark.svg";
import add from "./icon-img/add.svg";
import minus from "./icon-img/minus.svg";
import star from "./icon-img/star.svg";
import whiteCart from "./icon-img/white-cart_2.svg";
import whiteLike from "./icon-img/white-hearts.svg";

function Icon(props) {
	if (props.icon === "cart") {
		return <img src={cart} alt={props.icon}></img>;
	} else if (props.icon === "like") {
		return <img src={like} alt={props.icon}></img>;
	} else if (props.icon === "checkmark") {
		return <img src={checkmark} alt={props.icon}></img>;
	} else if (props.icon === "add") {
		return <img src={add} alt={props.icon}></img>;
	} else if (props.icon === "minus") {
		return <img src={minus} alt={props.icon}></img>;
	} else if (props.icon === "star") {
		return <img src={star} alt={props.icon}></img>;
	} else if (props.icon === "whiteCart") {
		return <img src={whiteCart} alt={props.icon}></img>;
	} else if (props.icon === "whiteLike") {
		return <img src={whiteLike} alt={props.icon}></img>;
	} else return <div></div>;
}

export default Icon;
