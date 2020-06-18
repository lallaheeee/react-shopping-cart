import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Product, ShoppingCart } from "~/components/pages";

export default () => (
	<Router>
		<Switch>
			<Route path="/products" component={Product} />
			<Route path="/carts" component={ShoppingCart} />
		</Switch>
	</Router>
);
