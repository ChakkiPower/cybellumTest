import * as React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectCoreAccessToken } from '../../services';

const RequireAuthGuard: React.FC = () => {
  const coreAccessToken = useSelector(selectCoreAccessToken);

  if (coreAccessToken !== null) {
    return <Outlet />;
  }

  return <Navigate to="/login" replace />;
};

export { RequireAuthGuard };
