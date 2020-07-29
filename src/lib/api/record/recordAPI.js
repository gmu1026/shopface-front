import client from '../client';

export const getRecordList = async () => {
  const response = await client.get('https://iamchan.net/record');
  return { data: response.data };
};

export const postRecord = ({ data }) => {
  const response = client.post('https://iamchan.net/record', { data });
  console.log(response);
};
