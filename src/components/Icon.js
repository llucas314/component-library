import React from "react";
import "./Icon.css";
import cart from "./icons/cart_2.svg";
import like from "./icons/hearts.svg";
import checkmark from "./icons/checkmark.svg";
import add from "./icons/add.svg";
import minus from "./icons/minus.svg";
import star from "./icons/star.svg";

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
	} else return <div></div>;
}

export default Icon;
