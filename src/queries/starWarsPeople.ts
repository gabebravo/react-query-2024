import axios from 'axios';

export async function fetchStarwarsPeople() {
  let { data } = await axios.get(`https://swapi.dev/api/people`);
  await new Promise((r) => setTimeout(r, 500));
  return data?.results;
}

export async function fetchStarwarsPlanet(url: string) {
  let { data } = await axios.get(String(url));
  await new Promise((r) => setTimeout(r, 500));
  return data?.results;
}
