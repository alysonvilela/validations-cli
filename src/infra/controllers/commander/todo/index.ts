import { Command } from "commander";
import { TodosRepositoryInMemory } from "../../../repositories/in-memory/todos-repository";
import { registerTodoController } from "./register-todo-controller";
import { removeTodoController } from "./remove-todo-controller";

export interface TodoOptions {
  payload: string;
  encodedJson: boolean;
}

const todosRepository = new TodosRepositoryInMemory();

const commanderTodo = new Command()
  .command("todo")
  .addCommand(registerTodoController(todosRepository))
  .addCommand(removeTodoController(todosRepository));

export { commanderTodo };
