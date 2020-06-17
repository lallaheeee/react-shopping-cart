type Entries<T> = {
	[K in keyof T]: [K, T[K]];
}[keyof T][];

export default <T>(obj: T): Entries<T> => Object.entries(obj) as any;
