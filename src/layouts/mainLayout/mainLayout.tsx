import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { CategoryBar } from '../../components/categoryBar/categoryBar';
import { Footer } from '../../components/footer/footer';
import { FloatingButtons } from '../../components/floatingButtons/floatingButtons';


export function MainLayout() {
    return (
        <>
        <Header />
        <CategoryBar />

        <Outlet  />

        <Footer />
        <FloatingButtons />
        </>
    )
}