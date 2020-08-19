import client from '../client';

export const getEmployDashboardList = async ({ id, status }) => {
  const response = await client.get(`/employ/${id}/${status}`);
  return response;
};

export const getBusinessDashboardList = async ({ id, no, status }) => {
  const response = await client.get(
    `/businessman/${id}/branch/${no}/${status}`,
  );
  return response;
};
