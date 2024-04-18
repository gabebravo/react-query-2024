export const StarwarsPlanet: React.FC = () => {
  return <div>Starwars Planet</div>;
  // const { data } = useSuspenseQuery({
  //   queryKey: ['starwarsPlanet', planetUrl],
  //   queryFn: fetchStarwarsPlanet,
  // });

  // return data ? (
  //   <div>
  //     <h3>Home Planet</h3>
  //     <div>{data.name}</div>
  //   </div>
  // ) : null;
};
