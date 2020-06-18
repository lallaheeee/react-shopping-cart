import { useState, useEffect, useReducer } from "react";
import { Action, initialState, createAPIReducer } from "./reducer";

const defualtApi = () => Promise.reject();

export default function useFetch<T>(apiFunc: () => Promise<T> = defualtApi) {
	const APIReducer = createAPIReducer<T>();
	const [state, dispatch] = useReducer(APIReducer, initialState);
	const [api, setApi] = useState<Promise<T>>(apiFunc);

	const fetch = () => {
		dispatch({ type: Action.FETCH_LOADING });

		api.then((data: T) =>
			dispatch({ type: Action.FETCH_SUCCESS, data }),
		).catch(() => dispatch({ type: Action.FETCH_ERROR }));
	};

	useEffect(fetch, [api]);

	return { state, setApi };
}
