import { lazy } from 'react';
import { NoLazy } from '../pages/NoLazy';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';
// import { LazyLayout } from '../layout/LazyLayout';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    //LazyExoticComponent es un componente que se carga dinámicamente
    Component: JSXComponent | React.LazyExoticComponent<JSXComponent>;
    name: string;
}

/**
 * lazy() es una función que permite cargar dinámicamente un componente.
 */

const lazy1 = lazy(() => import('../layout/LazyLayout'));


export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload',
        Component: lazy1,
        name: 'Lazyload Dashboard',
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No-Lazy',
    },
];
