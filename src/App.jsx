import PageNotFound from "components/commons/PageNotFound";
import ProductList from "components/ProductList";
import { Redirect, Route, Switch } from "react-router-dom";

import Product from "./components/Product";

const App = () => (
  <Switch>
    <Route exact component={ProductList} path="/products" />
    <Route exact component={Product} path="/products/:slug" />
    <Redirect exact from="/" to="/products" />
    <Route component={PageNotFound} path="*" />
  </Switch>
);

export default App;
