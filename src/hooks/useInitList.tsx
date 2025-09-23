'use client';

import { getList } from '@/actions/actions';
import { useQuery } from 'react-query';

const useInitList = () => {
  return useQuery({
    queryKey: ['list'],
    queryFn: async () => {
      const data = await getList();
      return data;
    },
  });
};

export default useInitList;
