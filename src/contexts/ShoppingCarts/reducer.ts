import { Product, Coupon } from "~/types";
import { getLocalStorage, setLocalStorage } from "~/utils/storage";
import { showToast, Position, Colors } from "~/lib/ui/Toast";
import _ from "~/lib/_";

const MAX_NUM_CART = 3;
const STORAGE_KEY = "cartItem";

export enum Action {
	FETCH_COUPONS = "FETCH_PRODUCTS",
	ADD_PRODUCT = "ADD_PRODUCT",
	SELECT_PRODUCT = "SELECT_PRODUCT",
	SELECT_ALL_PRODUCT = "SELECT_ALL_PRODUCT",
	SET_PRODUCT_QUANTITY = "SET_PRODUCT_QUANTITY",
	SET_COUPON = "SET_COUPON",
}

export type ShoppingCartAction =
	| { type: Action.FETCH_COUPONS; coupons: Coupon[] }
	| { type: Action.ADD_PRODUCT; product: Product }
	| {
			type: Action.SELECT_PRODUCT;
			payload: { product: Product; isSelected: boolean };
	  }
	| {
			type: Action.SELECT_ALL_PRODUCT;
			isSelected: boolean;
	  }
	| {
			type: Action.SET_PRODUCT_QUANTITY;
			payload: { product: Product; quantity: number };
	  }
	| {
			type: Action.SET_COUPON;
			payload: { coupon: Coupon; checked: boolean };
	  };

export interface ShoppingCartState {
	products: Product[];
	coupons: Coupon[];
}

export const initialState: ShoppingCartState = {
	products: getLocalStorage(STORAGE_KEY) || [],
	coupons: [],
};

export const ShoppingCartReducer = (
	state: ShoppingCartState,
	action: ShoppingCartAction,
): ShoppingCartState => {
	let result = state;
	switch (action.type) {
		case Action.FETCH_COUPONS: {
			const { coupons } = action;
			result = {
				...state,
				coupons,
			};
			break;
		}
		case Action.ADD_PRODUCT: {
			const { product } = action;
			const products = _.includes(
				product.id,
				_.map(product => product.id, state.products),
			)
				? _.remove(product, state.products)
				: [...state.products, product];

			if (products.length > MAX_NUM_CART) {
				showToast({
					message: "장바구니에는 3개의 물품까지 담을 수 있습니다 ",
					position: Position.BOTTOM_RIGHT,
					backgroundColor: Colors.redError,
				});
				return state;
			}

			result = {
				...state,
				products,
			};
			break;
		}
		case Action.SELECT_PRODUCT: {
			const { product: target, isSelected } = action.payload;
			const products = _.map(product => {
				if (product.id === target.id) product.isSelected = isSelected;

				return product;
			}, state.products);

			const isDisableCoupon = !products.some(
				(product: Product) =>
					product.isSelected &&
					!product.hasOwnProperty("availableCoupon"),
			);

			const coupons = isDisableCoupon
				? _.map(
						coupon => ({ ...coupon, isSelected: false }),
						state.coupons,
				  )
				: state.coupons;

			result = { ...state, coupons, products };
			break;
		}
		case Action.SELECT_ALL_PRODUCT: {
			const { isSelected } = action;
			const products = _.map(
				product => ({ ...product, isSelected }),
				state.products,
			);

			result = { ...state, products };
			break;
		}

		case Action.SET_PRODUCT_QUANTITY: {
			const { product: target, quantity } = action.payload;
			const products = _.map(product => {
				if (product.id === target.id) product.quantity = quantity;

				return product;
			}, state.products);

			result = { ...state, products };
			break;
		}
		case Action.SET_COUPON: {
			const { coupon: target, checked } = action.payload;
			const coupons = _.map(coupon => {
				if (coupon.title === target.title) coupon.isSelected = checked;
				return coupon;
			}, state.coupons);
			result = { ...state, coupons };
			break;
		}
	}

	setLocalStorage(STORAGE_KEY, result.products);

	return result;
};
