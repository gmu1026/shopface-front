import Auth from '@aws-amplify/auth';

export const login = async ({ id, password }) => {
  try {
    const user = await Auth.signIn(id, password);
    const name = user.signInUserSession.idToken.payload.email;
    const jwt = user.signInUserSession.idToken.jwtToken;

    return { data: { name, jwt } };
  } catch (error) {
    console.log(error.message);

    throw new Error(error.message);
  }
};
