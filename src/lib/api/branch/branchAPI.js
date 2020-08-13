import client from '../client';

export const getBranchList = async ({ name }) => {
  const response = await client.get(`/member/${name}/branch`);
  return response.data;
};

export const postBranch = async ({ post }) => {
  const response = await client.post('/branch', post);
  return response.data;
};

export const getBranch = async ({ no }) => {
  const response = await client.get(`/branch/${no}`);
  return response.data;
};

export const putBranch = async ({ no, data }) => {
  const response = await client.put(`/branch/${no}`, data);
  return response.data;
};

export const deleteBranch = async ({ no }) => {
  const response = await client.delete(`/branch/${no}`);
  return response.data;
};
