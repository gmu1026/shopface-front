import client from '../client';

export const getOccupationList = async () => {
  const response = await client.get(`/branch/1/occupation`);
  return response;
};

export const postOccupation = async ({ post }) => {
  const response = await client.post('/occupation', post);
  return response;
};

export const updateOccupation = async ({ post }) => {
  const response = await client.put('/occupation', post);
  return response;
};

export const deleteOccupation = async ({ no }) => {
  const response = await client.delete(`/occupation/${no}`);
  return response;
};
