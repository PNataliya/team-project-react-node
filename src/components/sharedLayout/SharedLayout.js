import { Outlet } from 'react-router-dom';

import { Header } from 'components/header/Headers';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
