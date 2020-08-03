import client from '../client';

export const getMemberList = async () => {
  const response = await client.get('https://iamchan.net/member');
  return response;
};
export const getMember = async ({ no }) => {
  const response = await client.get(`https://iamchan.net/member/${no}`);
  return response;
};

export const postMember = ({ data }) => {
  const response = client.post('https://iamchan.net/member', { data });
  console.log(response);
};
