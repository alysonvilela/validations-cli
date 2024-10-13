import { CommanderSingleton } from "./infra/cli-clients/commander";
import { commanderValidatePayloadSchemas } from "./infra/controllers/commander/validate-payload-schemas";
import { commanderTodo } from "./infra/controllers/commander/todo";

const commander = CommanderSingleton.getInstance();

const app = commander.app;
app.addCommand(commanderValidatePayloadSchemas);
app.addCommand(commanderTodo);

commander.init();
