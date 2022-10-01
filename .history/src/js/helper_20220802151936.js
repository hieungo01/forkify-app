import { async } from 'regenerator-runtime';
import { API_URL } from './config';
export const getJSON = async function (url) {
  const res = await fetch(`url`);
  // console.log(res);

  const data = await res.json();
  if (!res.ok) throw new Error(`${data.message} (${res.status})`);
};
