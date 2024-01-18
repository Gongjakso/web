import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicRoutePage from './PublicRoute';
import PrivateRoutePage from './PrivateRoute';
import { Suspense } from 'react';
import HomePage from '../pages/HomePage/HomePage';
import DefaultLayout from '../Layout/DefaultLayout';

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loding....</div>}>
                <Routes>
                    <Route element={<PublicRoutePage />}>
                        <Route element={<DefaultLayout />}>
                            <Route path={'/home'} element={<HomePage />} />
                        </Route>
                    </Route>
                </Routes>
            </Suspense>
            <Suspense fallback={<div>loding....</div>}>
                <Routes>
                    <Route element={<PrivateRoutePage />}></Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};
export default Router;
