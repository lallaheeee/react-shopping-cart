import React from "react";
import ProductList from "~/components/UI/blocks/ProductList";
import Pagination from "~/components/UI/atoms/Pagination";
import useProductList from "./useProductList";
import BaseTemplate from "~/components/pages/BaseTemplate";

const ProductPage = () => {
	const { page, products, totalPage, setPage } = useProductList();

	return (
		<BaseTemplate>
			<ProductList
				products={products}
				carts={[]}
				onClickShoppingCart={() => {}}
			/>
			<Pagination page={page} totalPage={totalPage} onChange={setPage} />
		</BaseTemplate>
	);
};

export default ProductPage;
