import { Auth } from '@aws-amplify/auth';
import client from '../client';

export const login = async ({ id, password }) => {
  try {
    const user = await Auth.signIn(id, password);
    const name = user.signInUserSession.idToken.payload.email;
    const jwt = user.signInUserSession.idToken.jwtToken;

    return { data: { user: { name, jwt } } };
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
    return { data: { message: 'Success' } };
  } catch (error) {
    throw new Error('로그아웃 실패');
  }
};

export const singUp = async ({ member }) => {
  try {
    /* const user = await Auth.signUp({
      username: member.id,
      password: member.password,
    });
    return { data: { user } };
    console.log(user); */
    const response = await client.post('/member', member);
    console.log(response);

    return response;
  } catch (error) {
    console.log('error signing up:', error);
    throw new Error(error.message);
  }
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

/* const checkExpire = () => {
  axios.interceptors.request.use(function (config) {
    return new Promise((resolve, reject) => {
      Auth.currentSession()
        .then((session) => {
          var idTokenExpire = session.getIdToken().getExpiration();
          var refreshToken = session.getRefreshToken();
          var currentTimeSeconds = Math.round(+new Date() / 1000);
          if (idTokenExpire < currentTimeSeconds) {
            Auth.signOut({ global: true });
            Auth.currentAuthenticatedUser().then((res) => {
              res.refreshSession(refreshToken, (err, data) => {
                if (err) {
                  Auth.signOut();
                } else {
                  config.headers.Authorization =
                    'Bearer ' + data.getIdToken().getJwtToken();
                  resolve(config);
                }
              });
            });
          } else {
            config.headers.Authorization =
              'Bearer ' + session.getIdToken().getJwtToken();
            resolve(config);
          }
        })
        .catch(() => {
          // No logged-in user: don't set auth header
          resolve(config);
        });
    });
  });
};
 */
