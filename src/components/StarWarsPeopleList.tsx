import React from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchStarWarsPeople } from '../queries';

interface Person {
  name: string;
}

export const StarWarsPeopleList: React.FC = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['starWarsPeople'],
    queryFn: fetchStarWarsPeople,
  });

  return data ? (
    <>
      <h3>Star Wars People</h3>
      <ul>
        {data.map((person: Person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </>
  ) : null;
};
