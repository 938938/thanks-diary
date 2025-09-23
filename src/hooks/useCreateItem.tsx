import { createItem, ItemInsert } from '@/actions/actions';
import { useMutation, useQueryClient } from 'react-query';

const useCreateItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (item: ItemInsert) => createItem(item),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list'] });
    },
  });
};

export default useCreateItem;
