import React from "react";
import ProductList from "~/components/UI/blocks/ProductList";
import Pagination from "~/components/UI/atoms/Pagination";
import useProductList from "./useProductList";
import BaseTemplate from "~/components/pages/BaseTemplate";
import { useShoppingCart } from "~/contexts/ShoppingCarts";
import _ from "~/lib/_";
import { Product } from "~/types";

const ProductPage = () => {
	const { page, products, totalPage, setPage } = useProductList();
	const {
		state: { products: carts },
		addProduct,
	} = useShoppingCart();

	const handleClickShoppingCart = (id: string) => {
		const product = _.find((product: Product) => product.id === id)(
			products,
		);
		if (!product) return;
		addProduct(product);
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

export default ProductPage;
