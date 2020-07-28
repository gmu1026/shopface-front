import client from '../client';

export const getOccupationList = async () => {
  const response = await client.get('https://iamchan.net/sample');
  return { data: response.data };
};

export const postOccupation = ({ data }) => {
  client.post('https://iamchan.net/sample', { data });
};
