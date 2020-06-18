import React from "react";

import { useLocation, useHistory } from "react-router-dom";
import { Tabs } from "~/lib/ui";
import styled from "styled-components";

const ProductCartTabs = () => {
	const { pathname } = useLocation();
	const history = useHistory();

	const handleChange = (value: string) => {
		console.log(pathname, value);
		history.push(`${value}`);
	};

	return (
		<S.Tabs value={pathname} fluid={false} onChange={handleChange}>
			<Tabs.Item value="/products" title="상품 보기" />
			<Tabs.Item value="/carts" title="장바구니" />
		</S.Tabs>
	);
};

const S = {
	Tabs: styled(Tabs)`
		height: 5rem;
	`,
};

export default ProductCartTabs;
