import React, { useCallback } from "react";
import styled from "styled-components";
import { Flex } from "~/components/UI/layouts/Flex";
import { FillShopping, OutlineShopping } from "~/lib/Icons";
import { OnlineClass } from "~/types";

export interface ProductCardProps {
	product: OnlineClass;
	isCart?: boolean;
	onClickShoppingCart: (id: string) => void;
}

const ProductCard = (props: ProductCardProps) => {
	const { product, isCart, onClickShoppingCart } = props;

	const handleClickShoppingCart = useCallback(
		() => onClickShoppingCart(product.id),
		[product, onClickShoppingCart],
	);

	return (
		<S.Article>
			<S.ImageWrapper>
				<img src={product.coverImage} alt={product.title} />
			</S.ImageWrapper>
			<Flex contentBetween>
				<Flex column>
					<S.Name>{product.title}</S.Name>
					<S.Price>
						{Number(product.price).toLocaleString("ko")} 원
					</S.Price>
				</Flex>
				<button onClick={handleClickShoppingCart}>
					{isCart ? <FillShopping /> : <OutlineShopping />}
				</button>
			</Flex>
		</S.Article>
	);
};

const S = {
	Article: styled.article`
		width: 36rem;
		padding: 1rem;

		& svg {
			width: 2rem;
			height: 2rem;
		}

		& button {
			margin-left: auto;
			height: fit-content;
		}

		& > ${Flex} {
			padding: 1.5rem 1rem;
		}
	`,
	ImageWrapper: styled.div`
		width: 100%;
		height: 24rem;
		overflow: hidden;
		border-radius: 4px;

		& img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: transform 0.3s ease 0s, opacity 0.1s linear 0s;
		}

		& img:hover {
			transform: scale(1.1);
		}
	`,
	Name: styled.p`
		font-weight: 400;
		font-size: 1.2rem;

		color: ${props => props.theme.grey};
		margin-bottom: 0.5rem;
	`,
	Price: styled.p`
		font-weight: bold;
	`,
};

export default ProductCard;
