import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicRoutePage from './PublicRoute';
import PrivateRoutePage from './PrivateRoute';
import { Suspense } from 'react';
import HomePage from '../pages/HomePage/HomePage';
import DefaultLayout from '../Layout/DefaultLayout';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import TeamPart from '../pages/ProfileParticipated/ParticipatedTeam';
import TeamSupport from '../pages/ProfileApplied/AppliedTeam';
import TeamPortfolio from '../pages/Portfolio/MyPortfolio';
import Calendar from '../pages/CalendarPage/Calendar';
import DetailPageContest from '../pages/DetailPage/DetailPageContest';
import DetailPageProject from '../pages/DetailPage/DetailPageProject';
import Login from '../components/Auth/Login';
import KakaoRedirectPage from '../components/Auth/KakaoRedirectPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loding....</div>}>
                <Routes>
                    <Route element={<PublicRoutePage />}>
                        <Route element={<DefaultLayout />}>
                            <Route path={'/'} element={<HomePage />} />
                            <Route
                                path={'/contest'}
                                element={<DetailPageContest />}
                            />
                            <Route
                                path={'/project'}
                                element={<DetailPageProject />}
                            />
                            <Route path={'/calendar'} element={<Calendar />} />
                            <Route path={'/teambuild'} element={<HomePage />} />
                            <Route
                                path={'/profile'}
                                element={<ProfilePage />}
                            />
                            <Route
                                path={'/appliedTeam'}
                                element={<TeamSupport />}
                            />
                            <Route
                                path={'/participatedTeam'}
                                element={<TeamPart />}
                            />
                            <Route
                                path={'/teamPortfolio'}
                                element={<TeamPortfolio />}
                            />
                            <Route
                                path={'/contest'}
                                element={<DetailPageContest />}
                            />
                            <Route
                                path={'/project'}
                                element={<DetailPageProject />}
                            />
                            <Route path={'/login'} element={<Login />} />
                            <Route
                                path="/api/v1/auth/kakao/callback"
                                element={<KakaoRedirectPage />}
                            />
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
