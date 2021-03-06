import React, {
	createContext,
	useReducer,
	useEffect,
	useContext,
	useCallback,
} from "react";
import _ from "~/lib/_";
import {
	Action,
	ShoppingCartReducer,
	initialState,
	ShoppingCartAction,
	ShoppingCartState,
} from "./reducer";
import useFetch from "~/hooks/useFetch";
import * as api from "~/apis/carts";
import { Coupon, OnlineClass, Product } from "~/types";

const isProduct = (obj: any): obj is Product => {
	return "quantity" in obj;
};

type ShoppingCartContextProps = {
	state: ShoppingCartState;
	dispatch: React.Dispatch<ShoppingCartAction>;
	addProduct: (target: OnlineClass | Product) => void;
	selectProduct: (id: string, isSelected: boolean) => void;
	selectAllProduct: (isSelected: boolean) => void;
	setProductQuantity: (id: string, quantity: number) => void;
	setCoupon: (coupon: Coupon, checked: boolean) => void;
};

const ShoppingCartContext = createContext<ShoppingCartContextProps>({
	state: initialState,
	dispatch: () => initialState,
	addProduct: () => {},
	selectProduct: () => {},
	selectAllProduct: () => {},
	setProductQuantity: () => {},
	setCoupon: () => {},
});

export function ShoppingCartProvider(props: React.PropsWithChildren<{}>) {
	const [state, dispatch] = useReducer(ShoppingCartReducer, initialState);
	const {
		state: { data: fetchedCoupons },
	} = useFetch<Coupon[]>(api.getCoupons);

	const setCoupons = useCallback(() => {
		if (!fetchedCoupons) return;

		const coupons = _.map((coupon: Coupon) => ({
			...coupon,
			isSelected: false,
		}))(fetchedCoupons);

		dispatch({ type: Action.FETCH_COUPONS, coupons });
	}, [fetchedCoupons]);

	const addProduct = useCallback((target: OnlineClass | Product) => {
		let product;

		if (!isProduct(target)) {
			product = {
				...target,
				quantity: 1,
				isSelected: true,
			};
		} else product = target;

		dispatch({ type: Action.ADD_PRODUCT, product });
	}, []);

	const selectProduct = useCallback(
		(id: string, isSelected: boolean) => {
			const product = _.find((product: Product) => product.id === id)(
				state.products,
			);
			if (!product) return;

			dispatch({
				type: Action.SELECT_PRODUCT,
				payload: { product, isSelected },
			});
		},
		[state.products],
	);

	const selectAllProduct = useCallback(
		(isSelected: boolean) =>
			dispatch({ type: Action.SELECT_ALL_PRODUCT, isSelected }),
		[],
	);

	const setProductQuantity = useCallback(
		(id: string, quantity: number) => {
			const product = _.find((product: Product) => product.id === id)(
				state.products,
			);
			if (!product) return;

			dispatch({
				type: Action.SET_PRODUCT_QUANTITY,
				payload: { product, quantity },
			});
		},
		[state.products],
	);

	const setCoupon = useCallback((coupon: Coupon, checked: boolean) => {
		dispatch({ type: Action.SET_COUPON, payload: { coupon, checked } });
	}, []);

	useEffect(setCoupons, [fetchedCoupons]);

	return (
		<ShoppingCartContext.Provider
			value={{
				state,
				dispatch,
				addProduct,
				selectProduct,
				selectAllProduct,
				setProductQuantity,
				setCoupon,
			}}
			{...props}
		/>
	);
}

export default function useShoppingCart() {
	return useContext(ShoppingCartContext);
}
