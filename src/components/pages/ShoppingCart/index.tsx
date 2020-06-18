import React from "react";
import ShoppingCartTable from "~/components/UI/blocks/ShoppingCartTable";
import PaymentAmountSection from "~/components/UI/atoms/PaymentAmountSection";
import EmptyCart from "~/components/UI/atoms/EmptyCart";
import BaseTemplate from "~/components/pages/BaseTemplate";
import { useShoppingCart } from "~/contexts/ShoppingCarts";
import _ from "~/lib/_";
import { Product } from "~/types";

const ShoppingCartPage = () => {
	const {
		state: { products },
		selectProduct,
		setProductQuantity,
	} = useShoppingCart();

	const totalProductPrice = _.pipe(
		_.filter((product: Product) => product.isSelected),
		_.map((product: Product) => product.price * product.quantity),
		_.sum,
	)(products);

	return (
		<BaseTemplate>
			{products.length ? (
				<ShoppingCartTable
					products={products}
					onChangeCheckbox={selectProduct}
					onChangeInputNumber={setProductQuantity}
				/>
			) : (
				<EmptyCart />
			)}

			<PaymentAmountSection
				totalProductPrice={totalProductPrice}
				couponSalePrice={150000}
			/>
		</BaseTemplate>
	);
};

export default ShoppingCartPage;
