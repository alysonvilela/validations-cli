import { Command } from "commander";
import { commanderEncodedOption } from "../../../../utils/commander-encoded-option";
import { TodoOptions } from ".";
import { getPayload } from "../../../../utils/win-utils";
import { registerTodoSchema } from "../../../../application/lib/dtos/register-todo-schema";
import { cliRequest } from "../../../cli-request";
import { RegisterTodoUseCase } from "../../../../application/use-cases/register-todo";
import { TodosRepository } from "../../../repositories/todos-repository";

export const registerTodoController = (todosRepository: TodosRepository) => {
  return new Command()
    .command("register")
    .option("-p, --payload <string>", "Payload of the request")
    .addOption(commanderEncodedOption)
    .action(async (params: TodoOptions): Promise<undefined> => {
      const data = getPayload(params);
      const dto = registerTodoSchema.safeParse(data);

      if (!dto.success) {
        cliRequest.response(JSON.stringify(dto));
        return;
      }
      const registerUseCase = new RegisterTodoUseCase(todosRepository);
      const newTodo = await registerUseCase.execute({
        name: dto.data.name,
      });

      cliRequest.response(JSON.stringify(newTodo));
      return;
    });
};
