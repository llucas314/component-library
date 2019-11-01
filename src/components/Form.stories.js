import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./Form";

storiesOf("Forms", module)
	.add("Text Small", () => <Form name="Search" type="text" small />)
	.add("Text Normal", () => <Form type="text" />)
	.add("Text Large", () => <Form name="Search" type="text" large />)
	.add("Select Normal", () => <Form type="select" options={[1, 2, 3, 4]} />)
	.add("Counter", () => (
		<Form type="number" count={0} step={2.5} max={10} min={-10} />
	));
