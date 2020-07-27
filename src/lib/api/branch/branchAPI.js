import client from '../client';

export const getBranchList = async () => {
  const response = await client.get('https://iamchan.net/branch');
  console.log(response);
  return { data: response.data };
};

export const postBranch = ({ post }) => {
  console.log(JSON.stringify(post));

  const response = client.post('https://iamchan.net/sample', JSON.parse(post)); // 데이터 형식 확인 필요
  console.log(response);
};

export const getBranch = ({ no }) => {
  console.log(no);

  const response = client.put('https://iamchan.net/sample', no); // 데이터 형식 확인 필요
  console.log(response);
};
