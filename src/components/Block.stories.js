import React from "react";
import { storiesOf } from "@storybook/react";

import Block from "./Block";

storiesOf("Products", module)
	.add("Block", () => (
		<Block name="mac" title="Apple Macbook Pro" sale="$499" original="$599" />
	))
	.add("Gray Block", () => (
		<Block
			name="mac"
			title="Apple Macbook Pro"
			sale="$499"
			original="$599"
			gray
		/>
	))
	.add("Block Row", () => (
		<Block
			name="mac"
			title="Apple Macbook Pro"
			sale="$499"
			original="$599"
			row
		/>
	))
	.add("Gray Block Row", () => (
		<Block
			name="mac"
			title="Apple Macbook Pro"
			sale="$499"
			original="$599"
			row
			gray
		/>
	))
	.add("Block Row Alt", () => (
		<Block
			name="beats"
			title="Beats Solo 2 On Ear 
            Headphones - Black"
			sale="$499"
			original="$599"
			row
		/>
	));
