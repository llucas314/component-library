import React from "react";
import { storiesOf } from "@storybook/react";

import Block from "./Block";

storiesOf("Products", module).add("Block", () => (
	<Block name="mac" title="Apple Macbook Pro" sale="$499" original="$599" />
));
