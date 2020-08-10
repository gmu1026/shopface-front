import client from '../client';

export const getEmployList = async () => {
  const response = await client.get(`/branch/1/employ`);
  return response;
};

export const postEmploy = ({ post }) => {
  const response = client.post('/employ', post);
  return response;
};

export const getEmploy = async ({ no }) => {
  const response = await client.get(`/employ/${no}`);
  return response;
};

export const updateEmploy = async ({ no, data }) => {
  const response = await client.put(`/employ/${no}`, data);
  return response;
};

export const deleteEmploy = async ({ no }) => {
  const response = await client.delete(`employ/${no}`);
  return response;
};
