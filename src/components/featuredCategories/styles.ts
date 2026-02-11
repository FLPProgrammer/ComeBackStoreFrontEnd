import styled  from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 40px 0;
    text-align: center;
    background-color: #fff;

    h1 {
        font-size: 26px;
        font-weight: 800;
        margin-bottom: 32px;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            bottom: -8px;
            left: 48%;
            width: 48px;
            height: 4px;
            border-radius: 4px;
            background-color: ${({ theme }) => theme.colors.purple};
        }
       
    }

    .categoryCard {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        padding: 5px;
    }
    
    .categoryCard img {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        object-fit: cover;
        transition: transform 0.3 ease;
    }

    .categoryCard img:hover {
        transform: scale(1.05);
    }

    .categoryCard span {
        margin-top: 12px;
        font-weight: 500;
        color: ${({ theme}) => theme.colors.purple};
}
    .categoryLink {
            text-decoration: none;
            color: inherit;
            display: block;
            }


    .swiper-slide {
        display: flex;
        justify-content: center;
        padding: 8px 0;
        
    }

    .swiper-button-prev,
    .swiper-button-next {
        width: 44px;
        height: 44px;
        padding: 5px;
        color: ${({ theme }) => theme.colors.purple};
        border-radius: 50%;
        
        backdrop-filter: blur(4px);
        transition: 0.25s;

        &:hover {
            background:  rgba(106, 13, 173, 0.18);
            transform: scale(1.1);
        }
    }

    @media (max-width: 1024px) {
        padding: 32px 0;

        h1 {
            font-size: 24px;
            margin-bottom: 28px;
        }

        .categoryCard img {
            width: 120px;
            height: 120px;
        }

        .swiper-button-prev,
        .swiper-button-next {
            width: 40px;
            height: 40px;
        }
    }

    @media (max-width: 768px) {
        padding: 24px 0;

        h1 {
            font-size: 20px;
            margin-bottom: 24px;

            &::after {
                width: 40px;
                left: 47%;
            }
        }

        .categoryCard img {
            width: 100px;
            height: 100px;
        }

        .categoryCard span {
            font-size: 13px;
            margin-top: 10px;
        }

        .swiper-button-prev,
        .swiper-button-next {
            width: 36px;
            height: 36px;
        }
    }

    @media (max-width: 480px) {
        padding: 20px 0;

        h1 {
            font-size: 18px;
            margin-bottom: 20px;

            &::after {
                width: 32px;
                left: 46%;
            }
        }

        .categoryCard img {
            width: 80px;
            height: 80px;
        }

        .categoryCard span {
            font-size: 12px;
            margin-top: 8px;
        }

        .swiper-button-prev,
        .swiper-button-next {
            width: 32px;
            height: 32px;
        }
    }
`;