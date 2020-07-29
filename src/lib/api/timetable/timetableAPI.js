import client from '../client';

export const getTimetableList = async () => {
  const response = await client.get('https://iamchan.net/timetable');
  return { data: response.data };
};
