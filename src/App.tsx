import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Overview from './pages/Dashboard/Overview';
import Loader from './common/Loader';

const Income = lazy(() => import('./pages/Flux/Income'));
const Outcome = lazy(() => import('./pages/Flux/Outcome'));
const Tables = lazy(() => import('./pages/Tables'));
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));
const FormProducts = lazy(() => import('./pages/Form/FormProducts'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Overview />} />
          <Route
            path="/flux/incomes"
            element={
              <Suspense fallback={<Loader />}>
                <Income />
              </Suspense>
            }
          />
          <Route
            path="/flux/outcomes"
            element={
              <Suspense fallback={<Loader />}>
                <Outcome />
              </Suspense>
            }
          />
          <Route
            path="/product/form"
            element={
              <Suspense fallback={<Loader />}>
                <FormProducts />
              </Suspense>
            }
          />
          <Route
            path="/product/form/:num_prod"
            element={
              <Suspense fallback={<Loader />}>
                <FormProducts />
              </Suspense>
            }
          />
          <Route
            path="/product/list"
            element={
              <Suspense fallback={<Loader />}>
                <Tables />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
