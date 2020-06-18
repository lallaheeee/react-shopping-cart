import API from "./utils";
import { Coupon } from "~/types";

export const getCoupons = () =>
	API.get<Coupon[]>(`/coupons`).then(({ data }) => data);
