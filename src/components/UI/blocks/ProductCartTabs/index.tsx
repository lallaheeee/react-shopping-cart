import React from "react";

import { useLocation, useHistory } from "react-router-dom";
import { Tabs, Badge } from "~/lib/ui";
import styled from "styled-components";

interface ProductCartTabsProps {
	numOfCarts?: number;
}

const ProductCartTabs = (props: ProductCartTabsProps) => {
	const { numOfCarts = 0 } = props;
	const { pathname } = useLocation();
	const history = useHistory();

	const handleChange = (value: string) => history.push(`${value}`);

	return (
		<S.Tabs value={pathname} fluid={false} onChange={handleChange}>
			<Tabs.Item value="/products" title="상품 보기" />
			<Tabs.Item
				value="/carts"
				caption={<Badge pill={true}>{numOfCarts}</Badge>}
				title="장바구니"
			/>
		</S.Tabs>
	);
};

const S = {
	Tabs: styled(Tabs)`
		height: 5rem;
	`,
};

export default ProductCartTabs;
