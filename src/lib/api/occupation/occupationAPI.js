import client from '../client';

export const getOccupationList = async () => {
  const response = await client.get('https://iamchan.net/occupation');
  return response;
};

export const postOccupation = async ({ post }) => {
  const response = await client.post('https://iamchan.net/occupation', post);
  return response;
};

export const updateOccupation = async ({ post }) => {
  const response = await client.put('https://iamchan.net/occupation', post);
  return response;
};

export const deleteOccupation = async ({ no }) => {
  const response = await client.delete('https://iamchan.net/occupation', {
    no,
  });
  return response;
};
