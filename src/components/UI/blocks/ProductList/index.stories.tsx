import React, { useState } from "react";
import { withKnobs } from "@storybook/addon-knobs";
import _ from "lodash/fp";
import ProductList from ".";
import { productItems } from "~/apis/data";
import { OnlineClass } from "~/types";

export default {
	title: "Blocks / ProductList",
	decorators: [withKnobs],
	component: ProductList,
};

export const Index = () => {
	const [carts, setCarts] = useState<OnlineClass[]>([]);

	const handleShoppingCart = (id: string) => {
		const product = _.find(product => product.id === id, productItems);

		if (!product) return;
		const newCarts = _.includes(product, carts)
			? _.remove(product, carts)
			: [...carts, product];

		setCarts(newCarts);
	};

	return (
		<ProductList
			products={productItems}
			carts={carts}
			onClickShoppingCart={handleShoppingCart}
		/>
	);
};
