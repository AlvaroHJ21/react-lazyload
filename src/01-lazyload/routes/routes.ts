import { lazy } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

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

const Lazy1 = lazy(() => import('../pages/LazyPage1'));
const Lazy2 = lazy(() => import('../pages/LazyPage2'));
const Lazy3 = lazy(() => import('../pages/LazyPage3'));

export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy-1',
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy-2',
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy-3',
    },
];
