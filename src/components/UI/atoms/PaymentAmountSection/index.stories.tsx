import React from "react";
import { withKnobs, number } from "@storybook/addon-knobs";
import PaymentAmountSection from ".";

export default {
	title: "Atoms / PaymentAmountSection",
	decorators: [withKnobs],
	component: PaymentAmountSection,
};

export const index = () => {
	return (
		<PaymentAmountSection
			totalProductPrice={number("totalProductPrice", 369000)}
			couponSalePrice={number("counponSalePrice", 150000)}
		/>
	);
};
