import { OnlineClass } from "~/types";

export enum Action {
	FETCH_PRODUCTS = "FETCH_PRODUCTS",
	SET_PAGE = "SET_PAGE",
}

type ProductListAction =
	| {
			type: Action.FETCH_PRODUCTS;
			products: OnlineClass[];
	  }
	| {
			type: Action.SET_PAGE;
			page: number;
	  };

interface ProductListState {
	products: OnlineClass[];
	page: number;
}

export const initialState: ProductListState = {
	products: [],
	page: 1,
};

export const ProductListReducer = (
	state: ProductListState,
	action: ProductListAction,
): ProductListState => {
	switch (action.type) {
		case Action.FETCH_PRODUCTS: {
			const { products } = action;
			return {
				...state,
				products,
			};
		}

		case Action.SET_PAGE: {
			const { page } = action;
			return {
				...state,
				page,
			};
		}
	}
};
