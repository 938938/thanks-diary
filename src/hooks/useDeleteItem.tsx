import { deleteItem } from '@/actions/actions';
import { useMutation, useQueryClient } from 'react-query';

const useDeleteItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => deleteItem(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list'] });
    },
  });
};

export default useDeleteItem;
