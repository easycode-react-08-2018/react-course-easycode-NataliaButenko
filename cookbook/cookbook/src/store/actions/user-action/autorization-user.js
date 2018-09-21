export const AUTH_USER_SUCCESS = 'auth_user_success';

export const autorizationUser = (user) => {
  return{
    type: AUTH_USER_SUCCESS,
    payload: {
      user
    }
  };
};
