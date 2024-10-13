import { Command } from "commander";

export class CommanderSingleton {
  static instance: CommanderSingleton | null = null;
  app!: Command;

  static getInstance(): CommanderSingleton {
    if (CommanderSingleton.instance === null) {
      CommanderSingleton.instance = new CommanderSingleton();
      CommanderSingleton.instance.app = new Command();
      CommanderSingleton.instance.app
        .name("string-util")
        .description("CLI to some JavaScript string utilities")
        .version("0.8.0");
    }
    return CommanderSingleton.instance;
  }

  init() {
    this.app.parse();
  }
}
