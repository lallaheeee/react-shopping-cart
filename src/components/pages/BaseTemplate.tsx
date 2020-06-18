import React from "react";
import styled from "styled-components";
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
		<S.Main>
			<Flex column alignBaseline>
				{props.children}
			</Flex>
		</S.Main>
	</>
);

const S = {
	Main: styled.main`
		padding: 0 8rem;
	`,
};

export default BaseTemplate;
