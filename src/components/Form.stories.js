import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./Form";

storiesOf("Forms", module)
	.add("Text Small", () => <Form name="Search" formType="text" small />)
	.add("Text Normal", () => <Form formType="text" />)
	.add("Text Large", () => <Form name="Search" formType="text" large />)
	.add("Select Large", () => (
		<Form formType="select" options={["one", "two", "three", "four"]} large />
	))
	.add("Select Normal", () => <Form formType="select" options={[1, 2, 3, 4]} />)
	.add("Select Small", () => (
		<Form
			formType="select"
			options={["selected 1", "selected 2", "selected 3", "selected 4"]}
			small
		/>
	))
	.add("Faded Select Large", () => (
		<Form
			formType="select"
			options={["one", "two", "three", "four"]}
			large
			faded
		/>
	))
	.add("Faded Select Normal", () => (
		<Form formType="select" options={[1, 2, 3, 4]} faded />
	))
	.add("Faded Select Small", () => (
		<Form
			formType="select"
			options={["selected 1", "selected 2", "selected 3", "selected 4"]}
			small
			faded
		/>
	))
	.add("Counter", () => (
		<Form formType="number" count={0} step={2.5} max={10} min={-10} />
	))
	.add("Submit", () => (
		<Form formType="submit" name="Voucher code" type="primary" label="Reedem" />
	))
	.add("LargeSubmit", () => (
		<Form
			formType="submit"
			name="Voucher code"
			type="primary"
			label="Reedem"
			large
		/>
	))
	.add("Checkbox", () => (
		<Form
			formType="check"
			name="checkbox"
			value="no poppup"
			message="Don't show this popup again"
		/>
	));
