import React from "react";
import "./Icon.css";
import cart from "./icons/cart_2.svg";
import like from "./icons/hearts.svg";

function Icon(props) {
	if (props.icon === "cart") {
		return <img src={cart} alt={props.icon}></img>;
	} else if (props.icon === "like") {
		return <img src={like} alt={props.icon}></img>;
	} else return "";
}

export default Icon;
