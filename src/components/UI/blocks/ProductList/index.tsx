import React from "react";
import styled from "styled-components";
import _ from "lodash/fp";
import ProductCard from "~/components/UI/atoms/ProductCard";
import { OnlineClass } from "~/types";

interface ProductListProps {
	products: OnlineClass[];
	carts: OnlineClass[];
	onClickShoppingCart: (id: string) => void;
}

const ProductList = (props: ProductListProps) => {
	const { products, onClickShoppingCart, carts } = props;
	return (
		<S.Wrapper>
			{_.map(
				product => (
					<li key={product.id}>
						<ProductCard
							product={product}
							isCart={_.includes(product, carts)}
							onClickShoppingCart={onClickShoppingCart}
						/>
					</li>
				),
				products,
			)}
		</S.Wrapper>
	);
};

const S = {
	Wrapper: styled.ul`
		& > * {
			margin-bottom: 1rem;
		}
	`,
};

export default ProductList;
