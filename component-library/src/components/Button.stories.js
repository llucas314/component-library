import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Button", module)
	.add("Primary", () => <Button type="primary" label="Do something" />)
	.add("Primary Outline", () => (
		<Button type="primary" label="Do something" outline />
	))
	.add("Primary Faded", () => (
		<Button type="primary" label="Do something" faded />
	))
	.add("Danger", () => <Button type="danger" label="Do something" />)
	.add("Danger Outline", () => (
		<Button type="danger" label="Do something" outline />
	))
	.add("Danger Faded", () => (
		<Button type="danger" label="Do something" faded red />
	))
	.add("Success", () => <Button type="success" label="Do something" />)
	.add("Success Outline", () => (
		<Button type="success" label="Do something" outline />
	))
	.add("Success Faded", () => (
		<Button type="success" label="Do something" faded />
	))
	.add("Warning", () => <Button type="warning" label="Do something" />)
	.add("Warning Outline", () => (
		<Button type="warning" label="Do something" outline />
	))
	.add("Warning Faded", () => (
		<Button type="warning" label="Do something" faded />
	))
	.add("Default", () => <Button type="default" label="Do something" />)
	.add("Default Outline", () => (
		<Button type="default" label="Do something" outline />
	))
	.add("Default Faded", () => (
		<Button type="default" label="Do something" faded />
	))
	.add("Large Primary", () => (
		<Button type="primary" label="Do something" large />
	))
	.add("Large Primary Outline", () => (
		<Button type="primary" label="Do something" outline large />
	))
	.add("Large Primary Faded", () => (
		<Button type="primary" label="Do something" faded large />
	))
	.add("Large Danger", () => (
		<Button type="danger" label="Do something" large />
	))
	.add("Large Danger Outline", () => (
		<Button type="danger" label="Do something" outline large />
	))
	.add("Large Danger Faded", () => (
		<Button type="danger" label="Do something" faded red large />
	))
	.add("Large Success", () => (
		<Button type="success" label="Do something" large />
	))
	.add("Large Success Outline", () => (
		<Button type="success" label="Do something" outline large />
	))
	.add("Large Success Faded", () => (
		<Button type="success" label="Do something" faded large />
	))
	.add("Large Warning", () => (
		<Button type="warning" label="Do something" large />
	))
	.add("Large Warning Outline", () => (
		<Button type="warning" label="Do something" outline large />
	))
	.add("Large Warning Faded", () => (
		<Button type="warning" label="Do something" faded large />
	))
	.add("Large Default", () => (
		<Button type="default" label="Do something" large />
	))
	.add("Large Default Outline", () => (
		<Button type="default" label="Do something" outline large />
	))
	.add("Large Default Faded", () => (
		<Button type="default" label="Do something" faded large />
	))
	.add("Cart", () => <Button type="primary" label="Add To Cart" faded />);
