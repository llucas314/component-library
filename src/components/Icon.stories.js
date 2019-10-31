import React from "react";
import { storiesOf } from "@storybook/react";

import Icon from "./Icon";

storiesOf("Icon", module)
	.add("Cart", () => <Icon icon="cart"></Icon>)
	.add("Like", () => <Icon icon="like"></Icon>);
