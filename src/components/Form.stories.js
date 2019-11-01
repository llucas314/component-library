import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./Form";

storiesOf("Forms", module)
	.add("Text Small", () => <Form name="Search" formType="text" small />)
	.add("Text Normal", () => <Form formType="text" />)
	.add("Text Large", () => <Form name="Search" formType="text" large />)
	.add("Select Normal", () => <Form formType="select" options={[1, 2, 3, 4]} />)
	.add("Counter", () => (
		<Form formType="number" count={0} step={2.5} max={10} min={-10} />
	))
	.add("Submit", () => (
		<Form formType="submit" name="Voucher code" type="primary" label="Reedem" />
	));
