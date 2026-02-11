import { Container } from './styles';
import { CarrouselBanner } from '../../components/carrouselBanner/carrouselBanner';
import { InfoBar } from '../../components/infoBar/infoBar';
import { DecorationArea } from '../../components/decorationArea/decorationArea';
import { FeaturedCategories } from '../../components/featuredCategories/featuredCategories';
import { LastReleases } from '../../components/lastReleases/lastReleases';

import { useScrollToHash } from '../../hooks/useScrollToHash';

export function Home() {

    useScrollToHash();
    
    return (
        <Container>
            <CarrouselBanner/>
            <InfoBar/>
            <DecorationArea/>
            <FeaturedCategories/>
            <LastReleases/>
        </Container>
    )
}
