import { BrowserRouter } from "react-router-dom";
import { CartProvider } from '../src/contexts/cart/cartProvider';
import { FavoritesProvider } from '../src/contexts/favorites/favoritesProvider';  
import { AuthProvider } from '../src/contexts/auth/authProvider'
import { AppRoutes } from "./routes/routes";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
      <CartProvider>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </CartProvider>      
    </FavoritesProvider>
    </AuthProvider>


  );
}

export default App;
