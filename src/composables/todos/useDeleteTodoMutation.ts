import { useMutation, useQueryClient } from "vue-query";
import { http } from "../../services";

export function useDeleteTodoMutation() {
  const queryClient = useQueryClient();

  async function deleteTodo(id: number) {
    return await http.delete(`todos/${id}`);
  }

  return useMutation("delete-todo", deleteTodo, {
    onSuccess: () => queryClient.invalidateQueries("todos"),
  });
}
