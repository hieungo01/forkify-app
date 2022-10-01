import { async } from 'regenerator-runtime';

export const getJSON = async function () {
  const res = await fetch(`${API_URL}/${id.slice(1)}`);
  // console.log(res);

  const data = await res.json();
  if (!res.ok) throw new Error(`${data.message} (${res.status})`);
};
