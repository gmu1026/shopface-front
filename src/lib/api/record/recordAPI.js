import client from '../client';

export const getRecordList = async ({ id }) => {
  const response = await client.get(`/member/${id}/record`);
  return response;
};

export const postRecord = ({ post }) => {
  const response = client.post('/record', post);
  return response;
};
