import { axiosInstance } from '..';
import { URLS } from '../../../consts/urls';
import { LoginRequest } from '../../../models/auth';

export const login = async (params: LoginRequest) => {
  return await axiosInstance
    .post(URLS.LOGIN, params)
    .then((resp) => {
      return resp?.data;
    })
    .catch((error) => {
      throw new Error(error?.response?.data);
    });
};
