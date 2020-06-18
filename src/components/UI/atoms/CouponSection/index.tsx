import React from "react";
import styled from "styled-components";
import { Checkbox } from "~/lib/ui";
import { Coupon } from "~/types";

interface CouponSectionProps {
	coupons: Coupon[];
	onChange: (coupon: Coupon, checked: boolean) => void;
}

const CouponSection = (props: CouponSectionProps) => {
	const { coupons, onChange } = props;
	return (
		<S.Section>
			<S.Title> 쿠폰 선택하기 </S.Title>
			{coupons.length
				? coupons.map(coupon => (
						<Checkbox
							key={coupon.title}
							checked={coupon.isSelected}
							onChange={() =>
								onChange(coupon, !coupon.isSelected)
							}
						>
							{coupon.title}
						</Checkbox>
				  ))
				: "적용 가능한 쿠폰이 없습니다"}
		</S.Section>
	);
};

const S = {
	Section: styled.section`
		padding: 2rem 3rem;
	`,
	Title: styled.h3`
		font-size: 1.7rem;
	`,
};

export default CouponSection;
