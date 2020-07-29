import client from '../client';

export const getScheduleList = async () => {
  const response = await client.get('https://iamchan.net/schedule');
  return { data: response.data };
};
