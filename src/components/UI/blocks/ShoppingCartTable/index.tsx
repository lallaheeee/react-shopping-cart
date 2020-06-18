import React from "react";
import styled from "styled-components";
import ShoppingCartItem from "~/components/UI/atoms/ShoppingCartItem";
import { Product } from "~/types";

interface ShoppingCartTableProps {
	products: Product[];
	onChangeCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onChangeInputNumber: (value: number) => void;
}

const headers = ["선택", "상품정보", "수량", "상품금액", "쿠폰 적용 여부"];

const ShoppingCartTable = (props: ShoppingCartTableProps) => {
	const { products, onChangeCheckbox, onChangeInputNumber } = props;

	return (
		<S.Ul>
			<S.Li>
				{headers.map(title => (
					<span key={title}>{title}</span>
				))}
			</S.Li>
			{products.map(product => (
				<ShoppingCartItem
					key={product.id}
					product={product}
					onChangeCheckbox={onChangeCheckbox}
					onChangeInputNumber={onChangeInputNumber}
				/>
			))}
		</S.Ul>
	);
};

const S = {
	Ul: styled.ul`
		text-align: center;
	`,
	Li: styled.li`
		display: grid;
		grid-template-columns: 1fr 4fr 1fr 1fr 1fr;

		line-height: 5;
		font-weight: bold;

		border-bottom: 2px solid ${props => props.theme.grey};
	`,
};

export default ShoppingCartTable;
