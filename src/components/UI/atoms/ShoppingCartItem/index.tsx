import React from "react";
import styled from "styled-components";
import { Checkbox, InputNumber, Badge } from "~/lib/ui";
import { Coupon as CouponIcon } from "~/lib/Icons";
import { Product } from "~/types";

interface ShoppingCartItemProps {
	product: Product;
	onChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onChangeInputNumber: (value: number) => void;
}

const ShoppingCartItem = (props: ShoppingCartItemProps) => {
	const { product, onChangeCheckbox, onChangeInputNumber } = props;
	const handleChange = (value: string | number | undefined) => {
		if (typeof value === "number") onChangeInputNumber(value);
	};
	return (
		<S.Li>
			<Checkbox
				checked={product.isSelected}
				onChange={onChangeCheckbox}
			/>
			{product.title}
			<InputNumber
				defaultValue={product.quantity}
				min={1}
				max={10}
				onChange={handleChange}
			/>
			{Number(product.price * product.quantity).toLocaleString("ko")} 원
			{(product.hasOwnProperty("availableCoupon") &&
				!product.availableCoupon) || (
				<Badge icon={<CouponIcon />}> 쿠폰 적용 가능 </Badge>
			)}
		</S.Li>
	);
};

const S = {
	Li: styled.li`
		display: grid;
		grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
		place-items: center;

		height: 5rem;

		border-bottom: 1px solid #eee;
	`,
};

export default ShoppingCartItem;
