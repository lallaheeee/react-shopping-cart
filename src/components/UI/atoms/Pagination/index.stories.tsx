import React from "react";
import { withKnobs, number, CHANGE } from "@storybook/addon-knobs";
import { addons } from "@storybook/addons";
import Pagination from ".";

export default {
	title: "Atoms / Pagination",
	decorators: [withKnobs],
	component: Pagination,
};

export const index = () => {
	const channel = addons.getChannel();
	const page = number("page", 1);
	const totalPage = number("totalPage", 10);
	return (
		<Pagination
			page={page}
			totalPage={totalPage}
			numOfPageView={number("numOfPageView", 5)}
			onChange={num =>
				channel.emit(CHANGE, {
					name: "page",
					value: num,
				})
			}
		/>
	);
};
