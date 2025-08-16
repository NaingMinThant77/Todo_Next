export const dynamic = "force-dynamic";

import { getTodos } from "@/server/actions/todo-action";
import TodoHomePage from "@/app/components/todo-homepage";
import { TodoSchema } from "@/app/types/todo-schema";

const page = async () => {
  const { success } = await getTodos();

  const todos: TodoSchema[] = success
    ? success.map((todo) => ({
        id: todo.id,
        title: todo.title,
        description: todo.description ?? undefined,
        dueAt: todo.dueAt!,
        priority: String(todo.priority),
        status: todo.status ?? "PENDING",
        createdAt: todo.createdAt ?? undefined,
      }))
    : [];

  return <TodoHomePage todos={todos} />;
};

export default page;
