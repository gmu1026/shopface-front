import client from '../client';

export const getMemberList = async () => {
  const response = await client.get('/member');
  return response;
};
export const getMember = async ({ no }) => {
  // TODO no -> id로 수정
  const response = await client.get(`/member/${no}`);
  return response;
};

export const postMember = ({ data }) => {
  const response = client.post('/member', { data });
  console.log(response);
};
