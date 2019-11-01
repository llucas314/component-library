import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./Form";

storiesOf("Forms", module)
	.add("Text Small", () => <Form name="Search" type="text" small />)
	.add("Text Normal", () => <Form type="text" />)
	.add("Text Large", () => <Form name="Search" type="text" large />);
