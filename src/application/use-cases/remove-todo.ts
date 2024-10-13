import { TodosRepository } from "../../infra/repositories/todos-repository";
import { IRemoveTodoInput } from "../lib/dtos/remove-todo-schema";

export class RemoveTodoUseCase {
  constructor(private readonly repository: TodosRepository) {}
  async execute(params: IRemoveTodoInput): Promise<{
    success: boolean;
  }> {
    const success = await this.repository.remove(params.id);
    return {
      success,
    };
  }
}
