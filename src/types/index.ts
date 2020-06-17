export interface OnlineClass {
	id: string;
	title: string;
	coverImage: string;
	price: number;
	score: number;
	availableCoupon?: boolean;
}

export interface Coupon {
	type: "rate" | "amount";
	title: string;
	discountRate?: number;
	discountAmount?: number;
}
