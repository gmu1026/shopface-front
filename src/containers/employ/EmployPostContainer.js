// import React, { useEffect, useState } from 'react';
// import EmployPostForm from '../../components/employ/EmployPostForm';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   changeInput,
//   postEmploy,
//   initializeForm,
// } from '../../modules/Employ/EmployPost';
// import { withRouter } from 'react-router-dom';
// import { checkExpire } from '../../lib/api/common/authAPI';
// import { logout } from '../../modules/common/auth';

// const EmployPostContainer = ({ history }) => {
//   const [error, setError] = useState(null);
//   const [show, setShow] = useState(false);
//   const closeModal = () => setShow(false);
//   const openModal = () => setShow(true);

//   const dispatch = useDispatch();
//   const { employPost, postResult, postError, user } = useSelector(
//     ({ employPost, auth }) => ({
//       employPost: employPost.post,
//       postResult: employPost.postResult,
//       postError: employPost.postError,
//       user: auth.user,
//     }),
//   );

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
//     const data = employPost;
//     if ([data.name, data.branch, data.role, data.department].includes('')) {
//       setError('빈 칸을 모두 입력하세요');
//       return;
//     }
//     setError(null);
//     dispatch(
//       postEmploy({
//         post: {
//           name: data.name,
//           branch: data.branch,
//           role: data.role,
//           department: data.department,
//         },
//       }),
//     );
//   };

//   useEffect(() => {
//     if (postResult === 'Success') {
//       dispatch(initializeForm('post'));
//       history.push('/employ');
//     }
//   }, [history, dispatch, postResult]);

//   useEffect(() => {
//     if (postError !== null) {
//       setError('등록에 실패 했습니다.');
//     }
//   }, [postError]);

//   useEffect(() => {
//     if (user !== null) {
//       checkExpire().then((isExpired) => {
//         if (isExpired) {
//           dispatch(logout());
//         }
//       });
//     }
//     dispatch(initializeForm('post'));
//   }, [dispatch, user]);

//   return (
//     <EmployPostForm
//       onSubmit={onSubmit}
//       onChange={onChange}
//       error={error}
//       show={show}
//       closeModal={closeModal}
//       openModal={openModal}
//     ></EmployPostForm>
//   );
// };

// export default withRouter(EmployPostContainer);
