import client from '../client';

export const getScheduleList = async ({ selectedBranch }) => {
  const response = await client.get(`/branch/${selectedBranch}/schedule`);
  return response;
};
