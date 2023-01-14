import { Suspense } from 'react';
import { BrowserRouter, Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { routes } from '../01-lazyload/routes/routes';
import logo from '../assets/react.svg';

export const Navigation = () => {
    /**
     * Suspense es un componente que nos permite mostrar un fallback mientras se carga el componente
     */
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React logo" />
                        <ul>
                            {routes.map(({ to, name }, i) => (
                                <li key={i}>
                                    <NavLink className={({ isActive }) => (isActive ? 'nav-active' : '')} to={to}>
                                        {name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Routes>
                        {routes.map(({ path, Component }, i) => (
                            <Route key={i} path={path} element={<Component />} />
                        ))}
                        <Route path="/*" element={<Navigate to={routes[0].to} />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
};
