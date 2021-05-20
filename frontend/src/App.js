import React from 'react';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CartPage from './pages/CartPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/login' component={LoginPage} />
                    <Route path='/register' component={RegisterPage} />
                    <Route path='/shipping' component={ShippingPage} />
                    <Route path='/payment' component={PaymentPage} />
                    <Route path='/placeorder' component={PlaceOrderPage} />
                    <Layout>
                        <Route path='/product/:id' component={ProductPage} />
                        <Route
                            path='/cart/:id?/:quantity?'
                            component={CartPage}
                        />
                        <Route exact path='/' component={HomePage} />
                        {/* <Route component={HomePage} /> */}
                    </Layout>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
