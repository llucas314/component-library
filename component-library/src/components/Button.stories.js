import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Button", module)
	.add("Primary", () => <Button type="primary" />)
	.add("Danger", () => <Button type="danger" />)
	.add("Success", () => <Button type="success" />)
	.add("Warning", () => <Button type="warning" />)
	.add("Large Primary", () => <Button type="primary" large />)
	.add("Large Warning", () => <Button type="warning" large />)
	.add("Success Outline", () => <Button type="success" outline />);
