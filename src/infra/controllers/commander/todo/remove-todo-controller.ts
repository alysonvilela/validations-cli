import { Command } from "commander";
import { commanderEncodedOption } from "../../../../utils/commander-encoded-option";
import { TodoOptions } from ".";
import { getPayload } from "../../../../utils/win-utils";
import { cliRequest } from "../../../cli-request";
import { TodosRepository } from "../../../repositories/todos-repository";
import { removeTodoSchema } from "../../../../application/lib/dtos/remove-todo-schema";
import { RemoveTodoUseCase } from "../../../../application/use-cases/remove-todo";

export const removeTodoController = (todosRepository: TodosRepository) => {
  return new Command()
    .command("remove")
    .option("-p, --payload <string>", "Payload of the request")
    .addOption(commanderEncodedOption)
    .action(async (params: TodoOptions): Promise<undefined> => {
      const data = getPayload(params);
      const dto = removeTodoSchema.safeParse(data);

      if (!dto.success) {
        cliRequest.response(JSON.stringify(dto));
        return;
      }

      const removeTodoUseCase = new RemoveTodoUseCase(todosRepository);
      const res = await removeTodoUseCase.execute({
        id: dto.data.id,
      });

      cliRequest.response(JSON.stringify(res));
      return;
    });
};
