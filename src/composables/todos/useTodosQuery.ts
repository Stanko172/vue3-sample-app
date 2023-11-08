import { useQuery } from "vue-query";
import { http } from "../../services";

export function useTodosQuery() {
  async function fetchTodos() {
    const response = await http.get("todos");
    return response.data;
  }

  return useQuery("todos", fetchTodos);
}
