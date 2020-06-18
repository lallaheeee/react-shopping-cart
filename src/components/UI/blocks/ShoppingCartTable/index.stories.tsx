import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import ShoppingCartTable from ".";
import db from "~/apis/db.json";

export default {
	title: "Blocks / ShoppingCartTable ",
	decorators: [withKnobs],
	component: ShoppingCartTable,
};

export const Index = () => {
	const products = db.products.map(product => ({
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
