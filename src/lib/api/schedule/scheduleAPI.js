import client from '../client';

export const getScheduleList = async ({ id }) => {
  const response = await client.get(`/member/${id}/schedule`);
  return response;
};

export const getSchedule = async ({ no }) => {
  const response = await client.get(`/schedule/${no}`);
  return response;
};

export const postSchedule = async ({ data }) => {
  const response = await client.post('/schedule', data);
  return response;
};

export const updateSchedule = async () => {
  const response = await client.put('/schedule');
  return response;
};
