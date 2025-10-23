import { addLikesItem } from '@/actions/actions';
import { useMutation, useQueryClient } from 'react-query';

const useAddLikes = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, likes }: { id: number; likes: number }) =>
      addLikesItem(id, likes),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['list'] });
    },
  });
};

export default useAddLikes;
