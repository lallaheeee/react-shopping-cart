import React from "react";
import {
	withKnobs,
	boolean,
	text,
	number,
	CHANGE,
} from "@storybook/addon-knobs";
import { addons } from "@storybook/addons";
import Card from ".";

export default {
	title: "Atoms / ProductCard",
	decorators: [withKnobs],
	component: Card,
};

export const index = () => {
	const product = {
		id: "B9vUv0E0ibc0X55kVVLr",
		title: text(
			"title",
			"포근한 니트로 만드는 나만의 글씨, 봉봉메이드 니트레터링 클래스",
		),
		coverImage:
			"https://cdn.class101.net/images/3a25ecd9-d1ab-4d21-8cc1-522ea711e729",
		price: number("price", 56000),
		score: 200,
	};
	const isCart = boolean("장바구니", false);
	const channel = addons.getChannel();

	return (
		<Card
			product={product}
			onClickShoppingCart={() =>
				channel.emit(CHANGE, {
					name: "장바구니",
					value: !isCart,
				})
			}
			isCart={isCart}
		/>
	);
};
