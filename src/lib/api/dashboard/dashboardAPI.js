import client from '../client';

export const getDashboardList = async () => {
  const response = await client.get();
  return response;
};
