import client from '../client';

export const getBranchList = async ({ name }) => {
  const response = await client.get(`/branch/member/${name}`);
  return response;
};

export const postBranch = async ({ post }) => {
  const response = await client.post('/branch', post);
  return response;
};

export const getBranch = async ({ no }) => {
  const response = await client.get(`/branch/${no}`);
  return response;
};

export const putBranch = async ({ no, formData }) => {
  const response = await client.put(`/branch/${no}`, formData);
  console.log(response);
  return response;
};

export const deleteBranch = async ({ no }) => {
  const response = await client.delete(`/branch/${no}`);
  return response;
};
