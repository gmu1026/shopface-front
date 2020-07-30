import client from '../client';

export const getRecordList = async () => {
  const response = await client.get('https://iamchan.net/record');
  return response;
};

export const postRecord = ({ post }) => {
  const response = client.post('https://iamchan.net/record', post);
  return response;
};
