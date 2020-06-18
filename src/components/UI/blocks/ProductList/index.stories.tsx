import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import _ from "lodash/fp";
import ProductList from ".";
import db from "~/apis/db.json";
import { OnlineClass } from "~/types";

export default {
	title: "Blocks / ProductList",
	decorators: [withKnobs],
	component: ProductList,
};

export const Index = () => {
	const [carts, setCarts] = useState<OnlineClass[]>([]);

	const handleShoppingCart = (id: string) => {
		const product = _.find(product => product.id === id, db.products);

		if (!product) return;
		const newCarts = _.includes(product, carts)
			? _.remove(product, carts)
			: [...carts, product];

		setCarts(newCarts);
	};

	return (
		<ProductList
			products={db.products}
			carts={carts}
			onClickShoppingCart={handleShoppingCart}
		/>
	);
};
