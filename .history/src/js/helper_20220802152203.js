import { async } from 'regenerator-runtime';
export const getJSON = async function (url) {
  try {
    const res = await fetch(`url`);
    // console.log(res);

    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (error) {}
};
