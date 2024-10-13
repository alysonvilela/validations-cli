import { CommanderSingleton } from ".";
import { commanderTodo } from "../../controllers/commander/todo";
import { commanderValidatePayloadSchemas } from "../../controllers/commander/validate-payload-schemas";

export const commanderFactory = () => {
  const commander = CommanderSingleton.getInstance();

  const app = commander.app;
  app.addCommand(commanderValidatePayloadSchemas);
  app.addCommand(commanderTodo);

  commander.init();
};
