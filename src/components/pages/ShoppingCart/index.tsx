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

const isAvailbleCoupon = (product: Product) =>
	product.isSelected && !product.hasOwnProperty("availableCoupon");

const getPrice = (f: (item: any) => boolean, products: any[]) =>
	_.pipe(
		_.filter(f),
		_.map((product: Product) => product.price * product.quantity),
		_.sum,
	)(products);

const ShoppingCartPage = () => {
	const {
		state: { products, coupons },
		selectProduct,
		setProductQuantity,
		setCoupon,
	} = useShoppingCart();

	const totalProductPrice = getPrice(
		(product: Product) => product.isSelected,
		products,
	);
	const totalAvailableCouponsProductPrice = getPrice(
		isAvailbleCoupon,
		products,
	);

	const couponDiscountPrice = _.pipe(
		_.filter((coupon: Coupon) => coupon.isSelected),
		_.map((coupon: Coupon) =>
			calculateCoupon(coupon, totalAvailableCouponsProductPrice),
		),
		_.sum,
	)(coupons);

	const isDisableCoupon = !products.some(isAvailbleCoupon);

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
				disabled={isDisableCoupon}
			/>
			<PaymentAmountSection
				totalProductPrice={totalProductPrice}
				couponSalePrice={couponDiscountPrice}
			/>
		</BaseTemplate>
	);
};

export default ShoppingCartPage;
