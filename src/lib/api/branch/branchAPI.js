import client from '../client';

export const getBranchList = async () => {
  const response = await client.get('https://iamchan.net/sample');
  return { data: response.data };
};

export const postBranch = ({ data }) => {
  client.post('https://iamchan.net/sample', { data });
};
