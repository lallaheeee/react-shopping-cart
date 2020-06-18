import React from "react";
import styled from "styled-components";

const EmptyCart = () => {
	return <S.Section>장바구니에 담긴 상품이 없습니다.</S.Section>;
};

const S = {
	Section: styled.section`
		height: 30rem;
		line-height: 10;
	`,
};

export default EmptyCart;
