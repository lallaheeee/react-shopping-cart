import React from "react";
import styled, { css } from "styled-components";

interface PaymentAmountSectionProps {
	totalProductPrice: number;
	couponSalePrice: number;
}

const displayPrice = (price: number) =>
	`${Number(price).toLocaleString("ko")} 원`;

const PaymentAmountSection = (props: PaymentAmountSectionProps) => {
	const { totalProductPrice, couponSalePrice } = props;

	return (
		<S.Section>
			<S.Title> 결제 금액 </S.Title>
			<S.Item>
				<span>총 상품 금액</span>
				<span>{displayPrice(totalProductPrice)}</span>
			</S.Item>
			<S.Item>
				<span>쿠폰 할인 금액</span>
				<span> - {displayPrice(couponSalePrice)}</span>
			</S.Item>
			<S.FinalPrice>
				<span>최종 가격</span>
				<span>{displayPrice(totalProductPrice - couponSalePrice)}</span>
			</S.FinalPrice>
		</S.Section>
	);
};

const flexCss = css`
	display: flex;
	justify-content: space-between;
	padding: 0.5rem 0;
`;

const S = {
	Section: styled.section`
		width: 40rem;
		padding: 2rem 3rem;
	`,
	Title: styled.h3`
		font-size: 1.7rem;
	`,
	Item: styled.div`
		${flexCss}
	`,
	FinalPrice: styled.div`
		${flexCss}
		padding: 0.5rem 0;
		border-top: 1px solid #eee;

		font-size: 1.2rem;
		font-weight: bold;
	`,
};

export default PaymentAmountSection;
