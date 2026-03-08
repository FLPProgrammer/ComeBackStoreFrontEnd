import { Outlet } from 'react-router-dom';
import { ScrollToTop } from '../../components/scrollToTop/scrollToTop'
import { Header } from '../../components/header/header';
import { InfoBar } from '../../components/infoBar/infoBar';
import { FloatingButtons } from '../../components/floatingButtons/floatingButtons';
import { Footer } from '../../components/footer/footer';


export function ProductLayout() {
    return (
        <>
        <ScrollToTop />
        
        <Header />
        <InfoBar />

        <Outlet />

        <Footer />
        <FloatingButtons />
        </>
    );
}