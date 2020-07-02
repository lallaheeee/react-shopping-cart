const getLocalStorage = (key: string) => {
	const value = localStorage.getItem(key);

	return value ? JSON.parse(value) : null;
};

const setLocalStorage = <T>(key: string, value: T) =>
	localStorage.setItem(key, JSON.stringify(value));

export { getLocalStorage, setLocalStorage };
