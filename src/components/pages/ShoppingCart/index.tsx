import React from "react";
import ShoppingCartTable from "~/components/UI/blocks/ShoppingCartTable";
import PaymentAmountSection from "~/components/UI/atoms/PaymentAmountSection";
import EmptyCart from "~/components/UI/atoms/EmptyCart";
import CouponSection from "~/components/UI/atoms/CouponSection";
import BaseTemplate from "~/components/pages/BaseTemplate";
import { useShoppingCart } from "~/contexts/ShoppingCarts";
import _ from "~/lib/_";
import { Product, Coupon } from "~/types";

const calculateCoupon = (coupon: Coupon | undefined, price: number): number => {
	if (!coupon) return 0;
	if (coupon.type === "rate")
		return Math.floor((price * (coupon.discountRate || 0)) / 100);
	if (coupon.type === "amount") return coupon.discountAmount || 0;

	return 0;
};

const ShoppingCartPage = () => {
	const {
		state: { products, coupons },
		selectProduct,
		setProductQuantity,
		setCoupon,
	} = useShoppingCart();

	const totalProductPrice = _.pipe(
		_.filter((product: Product) => product.isSelected),
		_.map((product: Product) => product.price * product.quantity),
		_.sum,
	)(products);

	const tmp = _.pipe(
		_.filter((coupon: Coupon) => coupon.isSelected),
		_.map((coupon: Coupon) => calculateCoupon(coupon, totalProductPrice)),
		_.sum,
	)(coupons);

	const isAvailableCoupons = products.some(
		product =>
			product.isSelected && !product.hasOwnProperty("availableCoupon"),
	);

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
			<CouponSection
				coupons={coupons}
				onChange={setCoupon}
				disabled={!isAvailableCoupons}
			/>
			<PaymentAmountSection
				totalProductPrice={totalProductPrice}
				couponSalePrice={tmp}
			/>
		</BaseTemplate>
	);
};

export default ShoppingCartPage;
