import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchStarwarsPlanet } from '../../queries';

type Props = { planetUrl: string };
export const StarwarsPlanet: React.FC<Props> = ({ planetUrl }) => {
  const { data } = useSuspenseQuery({
    queryKey: ['starwarsPlanet', planetUrl],
    queryFn: () => fetchStarwarsPlanet(planetUrl),
    refetchOnWindowFocus: false,
  });

  console.log('gb - data:', data);
  return data ? (
    <div>
      <h3>Home Planet</h3>
      {/* <div>{data.name}</div> */}
    </div>
  ) : null;
};
