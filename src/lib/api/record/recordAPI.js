import client from '../client';

export const getRecordList = async () => {
  const response = await client.get('/record');
  return response;
};

export const postRecord = ({ post }) => {
  const response = client.post('/record', post);
  return response;
};
