import React from "react";
import styled from "styled-components";
import ProductCartTabs from "~/components/UI/blocks/ProductCartTabs";
import { Flex } from "~/components/UI/layouts/Flex";
import { useShoppingCart } from "~/contexts/ShoppingCarts";

interface BaseTemplateProps {
	children: React.ReactNode;
}

const BaseTemplate = (props: BaseTemplateProps) => {
	const {
		state: { products },
	} = useShoppingCart();
	return (
		<>
			<header>
				<ProductCartTabs numOfCarts={products.length} />
			</header>
			<S.Main>
				<S.Flex column alignBaseline>
					{props.children}
				</S.Flex>
			</S.Main>
		</>
	);
};

const S = {
	Main: styled.main`
		padding: 0 8rem;
	`,
	Flex: styled(Flex)`
		margin: 4rem auto 0 auto;
		width: fit-content;
	`,
};

export default BaseTemplate;
