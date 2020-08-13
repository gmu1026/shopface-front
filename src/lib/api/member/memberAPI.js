import client from '../client';

export const getMemberList = async () => {
  const response = await client.get('/member');
  return response.data;
};
export const getMember = async ({ id }) => {
  const response = await client.get(`/member/${id}`);
  return response.data;
};

export const postMember = ({ data }) => {
  const response = client.post('/member', { data });
  console.log(response);
};

export const putMember = async ({ id, data }) => {
  const response = await client.put(`/member/${id}`, data);
  return response.data;
};

export const deleteMember = async ({ id }) => {
  const response = await client.delete(`/member/${id}`);
  return response.data;
};
