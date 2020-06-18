import React from "react";
import {
	withKnobs,
	boolean,
	text,
	number,
	CHANGE,
} from "@storybook/addon-knobs";
import { addons } from "@storybook/addons";
import ShoppingCartItem from ".";

export default {
	title: "Atoms / ShoppingCartItem",
	decorators: [withKnobs],
	component: ShoppingCartItem,
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
	const isSelected = boolean("isSelected", true);
	const quantity = number("quantity", 1);
	const availableCoupon = boolean("availableCoupon", true);
	const channel = addons.getChannel();

	return (
		<ShoppingCartItem
			product={{ ...product, isSelected, quantity, availableCoupon }}
			onChangeCheckbox={e =>
				channel.emit(CHANGE, {
					name: "isSelected",
					value: e.target.checked,
				})
			}
			onChangeInputNumber={value =>
				channel.emit(CHANGE, {
					name: "quantity",
					value,
				})
			}
		/>
	);
};
