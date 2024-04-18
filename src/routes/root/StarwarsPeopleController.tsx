import { useQuery, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { toast } from 'react-toastify';
import React, { FC } from 'react';
import { fetchStarwarsPeople } from '../../queries';
import { StarwarsPeopleList } from './StarwarsPeople';

export const StarwarsPeopleController: FC = () => {
  // Prefetch
  useQuery({
    queryKey: ['starwarsPeople'],
    queryFn: fetchStarwarsPeople,
    // Optional optimization to avoid rerenders when this query changes:
    notifyOnChangeProps: [],
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
          <React.Suspense fallback={<h3>Loading Star Wars People...</h3>}>
            <StarwarsPeopleList />
          </React.Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};
