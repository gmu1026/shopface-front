import client from '../client';

export const getScheduleList = async () => {
  const response = await client.get('/schedule');
  return { data: response.data };
};
