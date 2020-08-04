import client from '../client';

export const getEmployList = async () => {
  const response = await client.get('https://iamchan.net/employ');
  return response;
};

export const postEmploy = ({ post }) => {
  const response = client.post('https://iamchan.net/employ', post);
  return response;
};

export const getEmploy = async ({ no }) => {
  const response = await client.get(`https://iamchan.net/employ/${no}`);
  return response;
};

export const updataEmploy = async ({ no, data }) => {
  const response = await client.put(`https://iamchan.net/employ/${no}`, data);
  return response;
};

export const deleteEmploy = async ({ no }) => {
  const response = await client.delete(`https://iamchan.net/employ/${no}`);
  return response;
};
