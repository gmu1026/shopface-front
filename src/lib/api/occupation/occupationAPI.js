import client from '../client';

export const getOccupationList = async () => {
  const response = await client.get('https://iamchan.net/occupation/43');
  return response;
};

export const postOccupation = ({ post }) => {
  const response = client.post('https://iamchan.net/occupation', post);
  return response;
};
