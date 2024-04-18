import { FC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { StarwarsPeopleController } from './routes/root/StarwarsPeopleController';
import { StarwarsPlanet } from './routes/homeplanet/StarwarsPlanet';

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go back to the home page</Link>
      </p>
    </div>
  );
}

export const App: FC = () => (
  <Routes>
    <Route path="/" element={<StarwarsPeopleController />}>
      {/* Using path="*"" means "match anything", so this route
        acts like a catch-all for URLs that we don't have explicit
      routes for. */}
      <Route path="*" element={<NoMatch />} />
    </Route>
    <Route path="homeplanet" element={<StarwarsPlanet />} />
  </Routes>
);
