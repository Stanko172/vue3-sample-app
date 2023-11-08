import { useMutation, useQueryClient } from "vue-query";
import { http } from "../../services";
import { Todo } from "../../types";
import { ref } from "vue";

export function useStoreTodoMutation() {
  const queryClient = useQueryClient();

  const errors = ref({
    title: null,
    content: null,
    completed: null,
  });

  //I would recommend creating some absctraction/service for processing errors
  //So that this piece of logic does not need to be repeated for every form validation
  function processErrorResponse(error): void {
    if (error && error.response) {
      errors.value.title = error.response.data?.errors?.title[0] ?? null;
    }
  }

  async function storeTodo(todo: Todo): Promise<Todo> {
    return await http.post("todos", todo);
  }

  const { mutate } = useMutation("store-todo", storeTodo, {
    onSuccess: () => queryClient.invalidateQueries("todos"),
    onError: processErrorResponse,
  });

  return { mutate, errors };
}
