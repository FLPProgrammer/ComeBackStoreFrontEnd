import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../layouts/mainLayout/mainLayout';
import { AuthLayout } from '../layouts/authLayout/authLayout';
import { ProductLayout } from '../layouts/productLayout/productLayout';
import { AllCategoryLayout } from '../layouts/allCategoryLayout/allCategoryLayout';
import { CartLayout } from '../layouts/cartLayout/cartLayout';
import { PaymentLayout } from '../layouts/paymentLayout/paymentLayout';
import { Home } from '../pages/home/home';
import { ProductPage } from '../pages/productPage/productPage';
import { AllCategoryPage } from '../pages/allCategoryPage/allCategoryPage';
import { CartPage } from '../pages/cartPage/cartPage';
import { AccountPage } from '../pages/accountPage/accountPage';
import { XboxOneComingSoon } from '../pages/xboxOneComingSoon/xboxOneComingSoon';
import { Login } from '../pages/auth/login/login';
import { Register } from '../pages/auth/register/register';
import { ForgotPassword } from '../pages/auth/forgotPassword/forgotPassword';
import { ResetPassword } from '../pages/auth/resetPassword/resetPassword';
import { CheckoutDigitalPage } from '../pages/checkoutDigitalPage/checkoutDigital';
import { NotFoundPage } from '../pages/notFoundPage/notFoundPage';
export function AppRoutes() {
    return (_jsxs(Routes, { children: [_jsxs(Route, { element: _jsx(MainLayout, {}), children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: '/conta', element: _jsx(AccountPage, {}) }), _jsx(Route, { path: "/xbox-one", element: _jsx(XboxOneComingSoon, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFoundPage, {}) })] }), _jsxs(Route, { element: _jsx(AuthLayout, {}), children: [_jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/register", element: _jsx(Register, {}) }), _jsx(Route, { path: "/forgot-password", element: _jsx(ForgotPassword, {}) }), _jsx(Route, { path: '/reset-password', element: _jsx(ResetPassword, {}) })] }), _jsx(Route, { element: _jsx(ProductLayout, {}), children: _jsx(Route, { path: "/produto/:id", element: _jsx(ProductPage, {}) }) }), _jsx(Route, { element: _jsx(AllCategoryLayout, {}), children: _jsx(Route, { path: "/categoria/:slug", element: _jsx(AllCategoryPage, {}) }) }), _jsx(Route, { element: _jsx(CartLayout, {}), children: _jsx(Route, { path: "/carrinho", element: _jsx(CartPage, {}) }) }), _jsx(Route, { element: _jsx(PaymentLayout, {}), children: _jsx(Route, { path: "/checkout", element: _jsx(CheckoutDigitalPage, {}) }) })] }));
}
