import React from "react";
import ProductCartTabs from "~/components/UI/blocks/ProductCartTabs";
import { Flex } from "~/components/UI/layouts/Flex";

interface BaseTemplateProps {
	children: React.ReactNode;
}

const BaseTemplate = (props: BaseTemplateProps) => (
	<>
		<header>
			<ProductCartTabs />
		</header>
		<main>
			<Flex column alignCenter>
				{props.children}
			</Flex>
		</main>
	</>
);

export default BaseTemplate;
