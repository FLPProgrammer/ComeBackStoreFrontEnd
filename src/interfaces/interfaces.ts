export interface IDropdownProps {
    small?: boolean;
}

export interface IGame {
    id: number;
    title: string;
    slug: string;
    platform: string;
    image: string;
    price: string;
    installments: number;
    installmentValue: string;
    pixPrice: string;
    category: string;
}

export interface IGameCardProps {
    game: IGame;
}


export interface ICategoryPageProps {
    games: IGame[];
}


export interface ICategory {
    name: string,
    slug: string;
    image: string;
}

export interface IGamesPageProps {
    title: string;
    games: IGame[]; 
}

export interface IUseFilteredGamesParams {
    games: IGame[];
    selectedCategory: string;
}

export interface IAuthForm {
    email: string;
    password: string;
}

export interface IRegisterForm extends IAuthForm {
    name: string;
    confirmPassword: string;
}

export interface IPaymentBoxProps {
    price: string;
    installments: number;
    installmentValue: string;
}

export interface IUseRelatedFilteredGamesParams {
    currentGame: IGame;
    limit?: number;
}

export interface IRelatedGamesProps {
    game: IGame;
}

export interface IUseHideOnScrollOptions {
    startHideAt?: number;
    threshold?: number;
}


export interface ISearchGameItem {
  type: "game";
  id: number;
  title: string;
  slug: string;
}

export interface ISearchCategoryItem {
  type: "category";
  name: string;
  slug: string;
}

export type ISearchItem = ISearchGameItem | ISearchCategoryItem;

export interface ICartItem extends IGame {
    quantity: number;
}

export interface ICartContextData {
    items: ICartItem[];
    addToCart: (game: IGame) => void;
    removeFromCart: (id: number) => void;
    increase: (id: number) => void;
    decrease: (id: number) => void;
    totalItems: number;
    totalPrice: number;
}

export interface IFavoriteGame {
    id: number;
    title: string;
    image: string;
    price: number;
    slug: string;
}

export interface IFavoritesContextType {
    favorites: IFavoriteGame[];
    totalFavorites: number;
    addFavorite: (game: IFavoriteGame) => void;
    removeFavorite: (id: number) => void;
    isFavorite: (id: number) => boolean;
}

export type IAccountTab = 'account' | 'orders' | 'wishlist' | 'change-password';

export interface IAccountTabProps {
    activeTab: IAccountTab;
    onChange: (tab: IAccountTab) => void;
}

export interface IAccountContentProps {
    activeTab: IAccountTab;
    onChangeTab: (tab: IAccountTab) => void;
}

export interface IOrder {
  id: number;
  date: string;
  status: 'Pago' | 'Pendente' | 'Cancelado';
  total: number;
}

export interface IAccountSidebarProps {
    activeTab: IAccountTab;
    onSelectTab: (tab: IAccountTab) => void;
}  


export interface ILoginRequest {
    email: string;
    password: string;
}

export interface IRegisterRequest {
    name: string;
    email: string;
    password: string;
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    phone: string;
}

export interface IAuthContextData {
    user: IUser | null;
    isAuthenticated: boolean;
    signIn(email: string, password: string): Promise<void>;
    signOut(): void;
    setUser: (user: IUser) => void;
}

export interface IAuthProviderProps {
    children: React.ReactNode;
}

export interface IPaymentProps {
    total: number;
}

export interface ICheckoutItem {
    title: string;
    price: string;
    quantity: number;
}

export interface ICheckoutResponse {
    url: string;
}