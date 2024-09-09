const REGISTER = 'register';
const LOGIN = 'login';
const PROFILE = 'profile';
const USER = 'user';

export const API = {
  LOGIN: `/${LOGIN}`,
  REGISTER: `${REGISTER}`,
  PROFILE: `/${PROFILE}`,
  USER: `/${USER}`,
  DELETE_RESULT: (id) => `/${id}`,
  UPDATE_RESULT: (id) => `/${id}`,
}