import React from "react";
import ProductList from "~/components/UI/blocks/ProductList";
import Pagination from "~/components/UI/atoms/Pagination";
import useProductList from "./useProductList";
import BaseTemplate from "~/components/pages/BaseTemplate";
import {
	useShoppingCart,
	ShoppingCartProvider,
} from "~/contexts/ShoppingCarts";
import _ from "~/lib/_";
import { Product } from "~/types";

const ProductPage = () => {
	const { page, products, totalPage, setPage } = useProductList();
	const {
		state: { products: carts },
		setProducts,
	} = useShoppingCart();

	const handleClickShoppingCart = (id: string) => {
		const product = _.find((product: Product) => product.id === id)(
			products,
		);
		if (!product) return;
		setProducts(product);
	};

	return (
		<BaseTemplate>
			<ProductList
				products={products}
				carts={carts}
				onClickShoppingCart={handleClickShoppingCart}
			/>
			<Pagination page={page} totalPage={totalPage} onChange={setPage} />
		</BaseTemplate>
	);
};

export default () => (
	<ShoppingCartProvider>
		<ProductPage />
	</ShoppingCartProvider>
);
