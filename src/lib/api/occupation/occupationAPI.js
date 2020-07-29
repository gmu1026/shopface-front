import client from '../client';

export const getOccupationList = async () => {
  const response = await client.get('https://iamchan.net/occupation');
  return { data: response.data };
};

export const postOccupation = ({ data }) => {
  const response = client.post('https://iamchan.net/occupation', { data });
  console.log(response);
};
