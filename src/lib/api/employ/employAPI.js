import client from '../client';

export const getEmployList = async () => {
  const response = await client.get('https://iamchan.net/employ');
  return { data: response.data };
};

export const postEmploy = ({ data }) => {
  const response = client.post('https://iamchan.net/employ', { data });
  console.log(response);
};
