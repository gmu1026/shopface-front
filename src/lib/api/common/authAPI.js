import { Auth } from '@aws-amplify/auth';
import client from '../client';

export const login = async ({ id, password }) => {
  try {
    const user = await Auth.signIn(id, password);
    const name = user.signInUserSession.idToken.payload.email;
    const jwt = user.signInUserSession.idToken.jwtToken;

    return { user: { name, jwt } };
  } catch (error) {
    console.log(error.message);

    throw new Error(error.message);
  }
};

export const logout = async () => {
  await Auth.signOut({ global: true }).catch(() => {
    throw new Error();
  });
  try {
    localStorage.removeItem('user');
    return { message: 'Success' }; // 수정요망
  } catch (error) {
    throw new Error('로그아웃 실패');
  }
};

export const singUp = async ({ member }) => {
  const response = await Auth.signUp({
    username: member.id,
    password: member.password,
  })
    .then(() => {
      const response = client.post('/member', member);
      return response;
    })
    .catch((e) => {
      throw new Error(e);
    });

  return response;

  /* console.log('error signing up:', error);
    throw new Error(error.message); */
};

export const checkExpire = async () => {
  let isExpired = false;
  await Auth.currentSession()
    .then((session) => {
      const accessTokenExpire = session.getAccessToken().getExpiration() - 100;
      const currentTimeSeconds = Math.round(Date.now() / 1000);
      if (accessTokenExpire < currentTimeSeconds) {
        return (isExpired = true);
      }
    })
    .catch((e) => {
      console.log(' 세션이 존재하지 않습니다. ');
      return isExpired;
    });
  return isExpired;
};
