import client from '../client';

export const getBranchList = async () => {
  const response = await client.get('https://iamchan.net/branch');
  return { data: response.data };
};
