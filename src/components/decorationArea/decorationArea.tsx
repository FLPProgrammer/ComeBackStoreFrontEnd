import { Container, BoxImg } from './styles';
import decoration1 from '../../../public/decoration1.png';
import decoration2 from '../../../public/decoration2.png';
import decoration3 from '../../../public/decoration3.png';

export function DecorationArea() {
    return (
        <Container>
            <BoxImg>
                <img src={decoration1} alt="Games" />
            </BoxImg>
            <BoxImg>
                <img src={decoration2} alt="Games" />
            </BoxImg>
            <BoxImg>
                <img src={decoration3} alt="Games" />
            </BoxImg>
        </Container>
    )
}