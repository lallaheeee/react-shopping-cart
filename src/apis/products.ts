import API from "./utils";
import { OnlineClass } from "~/types";

export const getProducts = () =>
	API.get<OnlineClass[]>(`/products`).then(({ data }) => data);
