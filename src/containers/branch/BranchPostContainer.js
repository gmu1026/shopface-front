// import React, { useEffect, useState } from 'react';
// import BranchPostForm from '../../components/branch/BranchPostForm';
// import DaumPostcode from 'react-daum-postcode';
// import { useDispatch, useSelector } from 'react-redux';
// import { changeInput, postBranch } from '../../modules/branch/branchPost';

// //TODO 우편 번호 찾기
// const BranchPostContainer = () => {
//   const [error, setError] = useState(null);
//   const dispatch = useDispatch();
//   const { branchPost, branchPostError } = useSelector(({ branchPost }) => ({
//     branchPost: branchPost,
//     branchPostError: branchPost.branchPostError,
//   }));

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     dispatch(
//       changeInput({
//         key: name,
//         value,
//       }),
//     );
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const data = branchPost;
//     console.log(data);
//     if (
//       [
//         data.id,
//         data.name,
//         data.phone,
//         //data.address,
//         data.detailAddress,
//         //data.zipCode,
//       ].includes('')
//     ) {
//       setError('빈 칸을 모두 입력하세요');
//       return;
//     }
//     //dispatch(postBranch());
//   };

//   return (
//     <BranchPostForm
//       onSubmit={onSubmit}
//       onChange={onChange}
//       error={error}
//     ></BranchPostForm>
//   );
// };

// export default BranchPostContainer;
