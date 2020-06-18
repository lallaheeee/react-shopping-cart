import React from "react";
import styled from "styled-components";
import ShoppingCartItem from "~/components/UI/atoms/ShoppingCartItem";
import { Flex } from "~/components/UI/layouts/Flex";
import { Product } from "~/types";

interface ShoppingCartTableProps {
	products: Product[];
	onChangeCheckbox: (id: string, value: boolean) => void;
	onChangeInputNumber: (id: string, value: number) => void;
}

const headers = ["선택", "상품정보", "수량", "상품금액", "쿠폰 적용 여부"];

const ShoppingCartTable = (props: ShoppingCartTableProps) => {
	const { products, onChangeCheckbox, onChangeInputNumber } = props;

	return (
		<Flex column alignStart>
			<S.Title>상품 목록</S.Title>
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
						onChangeCheckbox={e =>
							onChangeCheckbox(product.id, e.target.checked)
						}
						onChangeInputNumber={value =>
							onChangeInputNumber(product.id, value)
						}
					/>
				))}
			</S.Ul>
		</Flex>
	);
};

const S = {
	Title: styled.h3`
		align-self: stretch;
		margin: 1rem 6rem;

		font-size: 1.7rem;
	`,
	Ul: styled.ul`
		text-align: center;
		margin-bottom: 5rem;
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
