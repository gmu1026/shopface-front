import client from '../client';

export const getOccupationList = async ({ selectedBranch }) => {
  const response = await client.get(`/branch/${selectedBranch}/occupation`);
  return response;
};

export const postOccupation = async ({ post }) => {
  const response = await client.post('/occupation', post);
  return response;
};

export const updateOccupation = async ({ no, data }) => {
  const response = await client.put(`/occupation/${no}`, data);
  return response;
};

export const deleteOccupation = async ({ no }) => {
  // const response = await client.delete(`/occupation/${no}`);
  const response = await client.delete(`/occupation/13`);
  return response;
};
