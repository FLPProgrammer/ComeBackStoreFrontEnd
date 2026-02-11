import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { CategoryBar } from '../../components/categoryBar/categoryBar';
import { FloatingButtons } from '../../components/floatingButtons/floatingButtons';
import { Footer } from '../../components/footer/footer';

export function CartLayout() { 

    return (
        <>
        <Header />
        <CategoryBar />

        <Outlet />

        <Footer />
        <FloatingButtons />
        </>
    )
}