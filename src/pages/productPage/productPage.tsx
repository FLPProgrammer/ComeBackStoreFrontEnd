import { ProductContainer, ProductMain, ProductInfo, Thumbnails, ImageWrapper, InfoWrapper, Title, Platform, Price, BuyButton } from './styles';
import { PaymentBox } from '../../components/paymentBox/paymentBox';
import { RelatedGames } from '../../components/relatedGames/relatedGames';
import { UseProduct } from '../../hooks/useProduct'
import { useCart } from '../../contexts/cart/cartContext';
import { Link } from 'react-router-dom';

export function ProductPage() {

    const { game } = UseProduct();
    const { addToCart } = useCart();

    if(!game) {
        return <h2>Produto não encontrado</h2>;
    }

    return (
        <ProductContainer>
            <ProductMain>
                <Thumbnails>
                <img src={game.image} />
                <img src={game.image} />
                <img src={game.image} />
                </Thumbnails>

                <ImageWrapper>
                <img src={game.image} alt={game.title} />
                </ImageWrapper>

                <ProductInfo>
                <InfoWrapper>
                    <Title>{game.title}</Title>
                    <Platform>{game.platform}</Platform>
                    <Price>R${game.price}</Price>
                    <Link to='/checkout' onClick={() => addToCart(game)}>
                        <BuyButton>COMPRAR</BuyButton>
                    </Link>
                </InfoWrapper>

                <PaymentBox
                    price={game.price}
                    installments={game.installments}
                    installmentValue={game.installmentValue}
                />
                </ProductInfo>
            </ProductMain>
            

            <RelatedGames game={game} />
        </ProductContainer>

    )
}