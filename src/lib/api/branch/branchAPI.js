import client from '../client';

export const getBranchList = async () => {
  const response = await client.get('https://iamchan.net/branch');
  return response;
};

export const postBranch = async ({ post }) => {
  const response = await client.post('https://iamchan.net/branch', post);
  return response;
};

export const getBranch = async ({ no }) => {
  const response = await client.get(`https://iamchan.net/branch/${no}`);
  return response;
};

export const updataBranch = async ({ no, data }) => {
  const response = await client.put(`https://iamchan.net/branch/${no}`, data);
  return response;
};

export const deleteBranch = async ({ no }) => {
  const response = await client.delete(`https://iamchan.net/branch/${no}`);
  return response;
};
