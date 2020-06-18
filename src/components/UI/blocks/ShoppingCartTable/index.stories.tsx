import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import ShoppingCartTable from ".";
import { productItems } from "~/apis/data";

export default {
	title: "Blocks / ShoppingCartTable ",
	decorators: [withKnobs],
	component: ShoppingCartTable,
};

export const Index = () => {
	const products = productItems.map(product => ({
		...product,
		isSelected: true,
		quantity: 1,
	}));

	return (
		<ShoppingCartTable
			products={products}
			onChangeCheckbox={() => {}}
			onChangeInputNumber={() => {}}
		/>
	);
};
