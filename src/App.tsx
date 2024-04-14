import React from 'react';
import { useQuery, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import { fetchStarWarsPeople } from './queries';
import { StarWarsPeopleList } from './components/StarWarsPeopleList';
import { toast } from 'react-toastify';

function App() {
  // Prefetch
  useQuery({
    queryKey: ['starWarsPeople'],
    queryFn: fetchStarWarsPeople,
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
          <React.Suspense fallback={<h3>Loading Star Wars fun...</h3>}>
            <StarWarsPeopleList />
          </React.Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

export default App;
