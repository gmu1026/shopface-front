import client from '../client';

export const getTimetableList = async ({ selectecBranch }) => {
  const response = await client.get('https://iamchan.net/timetable');
  return { data: response.data };
};

export const getTimetable = async ({ no }) => {
  const response = await client.get('https://iamchan.net/timetable');
  return { data: response.data };
};
