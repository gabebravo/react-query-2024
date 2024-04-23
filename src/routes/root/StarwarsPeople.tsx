import React from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchStarwarsPeople } from '../../queries';
import { Link } from 'react-router-dom';
import { SwPerson } from './types';
import { usePlanetUrlState } from '../homeplanet/state';

export const StarwarsPeopleList: React.FC = () => {
  const setPlanetUrl = usePlanetUrlState((state) => state.setUrl);

  const { data } = useSuspenseQuery({
    queryKey: ['starwarsPeople'],
    queryFn: fetchStarwarsPeople,
    refetchOnWindowFocus: false,
  });

  const addPlanetUrl = (homeworld: string) => {
    setPlanetUrl(homeworld);
  };

  return data ? (
    <>
      <h3>Star Wars People</h3>
      <ul>
        {data.map((person: SwPerson) => (
          <li key={person.id}>
            <div className="sw-person-info">
              <div>{person.name}</div>
              <div>
                {' '}
                <Link
                  onClick={() => addPlanetUrl(person.homeworld)}
                  to="/homeplanet"
                >
                  homeplanet info
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  ) : null;
};
