import React from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchStarwarsPeople } from '../../queries';
import { Link } from 'react-router-dom';

interface Person {
  name: string;
}

export const StarwarsPeopleList: React.FC = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['starwarsPeople'],
    queryFn: fetchStarwarsPeople,
  });

  return data ? (
    <>
      <h3>Star Wars People</h3>
      <ul>
        {data.map((person: Person) => (
          <li key={person.name}>
            <div className="sw-person-info">
              <div>{person.name}</div>
              <div>
                {' '}
                <Link to="/homeplanet">homeplanet info</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  ) : null;
};
