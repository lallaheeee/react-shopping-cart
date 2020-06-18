import { useReducer, useEffect, useCallback, useMemo } from "react";
import { Action, initialState, ProductListReducer } from "./reducer";
import useFetch from "~/hooks/useFetch";
import * as api from "~/apis/products";
import { OnlineClass } from "~/types";
import _ from "~/lib/_";

const DEFAULT_NUM_PRODUCTS = 5;

export default function useProductList() {
	const [{ products, page }, dispatch] = useReducer(
		ProductListReducer,
		initialState,
	);
	const {
		state: { data: allProducts },
	} = useFetch<OnlineClass[]>(api.getProducts);

	const exposeProducts = useMemo(
		() =>
			_.slice(
				(page - 1) * DEFAULT_NUM_PRODUCTS,
				page * DEFAULT_NUM_PRODUCTS,
			)(products),
		[page, products],
	);
	const totalPage = useMemo(
		() => Math.ceil(products.length / DEFAULT_NUM_PRODUCTS),
		[products],
	);

	const setPage = useCallback(
		(page: number) => dispatch({ type: Action.SET_PAGE, page }),
		[],
	);
	const setProducts = useCallback(() => {
		if (!allProducts) return;

		const products = allProducts.sort((a, b) => b.score - a.score);

		dispatch({ type: Action.FETCH_PRODUCTS, products });
	}, [allProducts]);

	useEffect(setProducts, [allProducts]);

	return {
		products: exposeProducts,
		page,
		totalPage,
		setPage,
	};
}
