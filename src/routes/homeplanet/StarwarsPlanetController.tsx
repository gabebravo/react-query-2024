import { useQuery, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { toast } from 'react-toastify';
import React, { FC } from 'react';
import { fetchStarwarsPlanet } from '../../queries';
import { usePlanetUrlState } from '../homeplanet/state';
import { StarwarsPlanet } from '../homeplanet/StarwarsPlanet';

export const StarwarsPlanetController: FC = () => {
  const planetUrl = usePlanetUrlState((state) => state.url);

  // Prefetch
  useQuery({
    queryKey: ['starwarsPlanet', planetUrl],
    queryFn: () => fetchStarwarsPlanet(planetUrl),
    refetchOnWindowFocus: false,
    enabled: Boolean(planetUrl),
  });

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }) =>
            toast.error(error.message, {
              toastId: 'error-boundary',
              position: 'bottom-left',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
              onClose: () => resetErrorBoundary(),
            })
          }
          onReset={reset}
        >
          <React.Suspense fallback={<h3>Loading Star Wars Planet...</h3>}>
            <StarwarsPlanet planetUrl={planetUrl} />
          </React.Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};
