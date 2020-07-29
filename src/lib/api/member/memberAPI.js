import client from '../client';

export const getMemberList = async () => {
  const response = await client.get('https://iamchan.net/member');
  return { data: response.data };
};

export const postMember = ({ data }) => {
  const response = client.post('https://iamchan.net/member', { data });
  console.log(response);
};
