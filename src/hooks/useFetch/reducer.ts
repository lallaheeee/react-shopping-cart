export enum Action {
	FETCH_LOADING = "FETCH_LOADING",
	FETCH_SUCCESS = "FETCH_SUCCESS",
	FETCH_ERROR = "FETCH_ERROR",
}

type APIAction<T> =
	| { type: Action.FETCH_LOADING }
	| {
			type: Action.FETCH_SUCCESS;
			data: T;
	  }
	| { type: Action.FETCH_ERROR };

interface APIState<T> {
	data?: T;
	loading: boolean;
	error: boolean;
}

export const initialState = {
	loading: false,
	error: false,
};

export const createAPIReducer = <T>() => (
	state: APIState<T>,
	action: APIAction<T>,
): APIState<T> => {
	switch (action.type) {
		case Action.FETCH_LOADING: {
			return { ...state, loading: true };
		}
		case Action.FETCH_SUCCESS: {
			const { data } = action;
			return {
				...state,
				loading: false,
				data,
			};
		}
		case Action.FETCH_ERROR: {
			return { ...state, error: true, loading: false };
		}
		default:
			return state;
	}
};
