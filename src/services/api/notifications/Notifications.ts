import { URLS } from '../../../consts/urls';
import { axiosInstance } from '../apiInstance';

export const getNotifications = async (token: string) => {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return await axiosInstance
    .get(URLS.NOTIFICATIONS)
    .then((resp) => {
      return resp?.data;
    })
    .catch((error) => {
      throw new Error(error?.response?.data);
    });
};
