import axios from 'axios';

export async function fetchStarWarsPeople() {
  console.info('fetch star was people');
  let { data } = await axios.get(`https://swapi.dev/api/people`);
  await new Promise((r) => setTimeout(r, 1000));
  return data?.results;
}

export async function fetchStarWarsPerson(id: string) {
  console.info('fetch project id', id);
  let { data } = await axios.get(`https://swapi.dev/api/people/people/${id}`);
  await new Promise((r) => setTimeout(r, 1000));
  return data?.results;
}
