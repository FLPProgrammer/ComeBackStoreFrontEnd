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
import { CheckoutDigitalPage } from '../pages/checkoutDigitalPage/checkoutDigital';
import { NotFoundPage } from '../pages/notFoundPage/notFoundPage';


export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        
        <Route path='/conta' element={<AccountPage />}/>
        <Route path="/xbox-one" element={<XboxOneComingSoon />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />}/>
      </Route>

      <Route element={<ProductLayout />}>
        <Route path="/produto/:id" element={<ProductPage />} />
      </Route>

      <Route element={<AllCategoryLayout />}>
        <Route path="/categoria/:slug" element={<AllCategoryPage />} />
      </Route>

      <Route element={<CartLayout />}>
        <Route path="/carrinho" element={<CartPage />} />
      </Route>  

    <Route element={<PaymentLayout />}>
      <Route path="/checkout" element={<CheckoutDigitalPage />}/>
    </Route>
    </Routes>
  );
}
