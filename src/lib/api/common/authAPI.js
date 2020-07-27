import { Auth } from '@aws-amplify/auth';

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

export const logout = () => {
  try {
    Auth.signOut({ global: true });
    localStorage.removeItem('user');
  } catch (error) {
    console.log('error signing out: ', error);

    throw new Error(error.message);
  }
};

export const singUp = async ({ id, password }) => {
  try {
    const user = await Auth.signUp({
      username: id,
      password: password,
    });

    return { data: { user } };
  } catch (error) {
    console.log('error signing up:', error);
    throw new Error(error.message);
  }
};
