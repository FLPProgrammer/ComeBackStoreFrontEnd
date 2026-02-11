import { FloatingContainer, WhatsButton, TopButton } from './styles';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';


export function FloatingButtons() {
    function scrollToTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <FloatingContainer>
        <WhatsButton
            href="https://wa.me/5542999033921"
            target="_blank"
            aria-label="Fale conosco no WhatsApp"
        >
            <FaWhatsapp size={22} />
        </WhatsButton>

        <TopButton onClick={scrollToTop} aria-label="Voltar ao topo">
            <FaArrowUp size={16} />
        </TopButton>
    </FloatingContainer>
    )
}