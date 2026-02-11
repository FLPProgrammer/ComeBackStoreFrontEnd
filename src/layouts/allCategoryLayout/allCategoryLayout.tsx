import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { InfoBar } from '../../components/infoBar/infoBar';
import { FloatingButtons } from '../../components/floatingButtons/floatingButtons';
import { Footer } from '../../components/footer/footer';

export function AllCategoryLayout() {
    return (
         <>
         <Header />
         <InfoBar />

         <Outlet />

         <Footer />
         
        <FloatingButtons />
         </>
    )
}
