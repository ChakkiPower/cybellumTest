import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Notification } from '../models/notifications';
import { selectCoreAccessToken } from '../services';
import { getNotifications } from '../services/api';

export const useGetNotification = () => {
  const [data, setData] = useState<Notification | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const coreAccessToken = useSelector(selectCoreAccessToken) as string;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await getNotifications(coreAccessToken);
        setData(response[0]);

        setLoading(false); // set loading to false to indicate that the api call has ended
      } catch (error: any) {
        setError(error.message);
        setLoading(false); // set loading to false to indicate that the api call has ended
      }
    };
    fetchData();
  }, []);
  return { data, loading, error };
};
