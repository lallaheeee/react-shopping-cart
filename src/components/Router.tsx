import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Product, ShoppingCart } from "~/components/pages";
import { ShoppingCartProvider } from "~/contexts/ShoppingCarts";

export default () => (
	<Router>
		<Switch>
			<ShoppingCartProvider>
				<Route path="/" component={Home} />
				<Route path="/products" component={Product} />
				<Route path="/carts" component={ShoppingCart} />
			</ShoppingCartProvider>
		</Switch>
	</Router>
);
