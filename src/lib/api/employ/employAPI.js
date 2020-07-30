import client from '../client';

export const getEmployList = async () => {
  const response = await client.get('https://iamchan.net/employ');
  return response;
};

export const postEmploy = ({ post }) => {
  const response = client.post('https://iamchan.net/employ', post);
  return response;
};
