import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { URLS } from '../../consts/urls';
import { LoginPage, MainPage } from '../../pages';
import { RequireAuthGuard } from '../shells';

const RootRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<RequireAuthGuard />}>
        <Route path="/" element={<MainPage />} />
      </Route>
      <Route path={URLS.LOGIN} element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export { RootRoutes };
