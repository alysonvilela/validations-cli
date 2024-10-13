import { Todo } from "../models/todo";
import { IRegisterTodoInput } from "../lib/dtos/register-todo-schema";
import { TodosRepository } from "../../infra/repositories/todos-repository";

export class RegisterTodoUseCase {
  constructor(private readonly repository: TodosRepository) {}
  async execute(params: IRegisterTodoInput): Promise<Todo> {
    return await this.repository.register({
      id: "um-id-ai",
      name: params.name,
      completed: false,
    });
  }
}
