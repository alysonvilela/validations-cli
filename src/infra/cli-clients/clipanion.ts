import { BaseContext, Builtins, Cli, Command, Option } from "clipanion";

type Context = BaseContext & {
  cwd: string;
};

class YarnRunListing extends Command<Context> {
  json = Option.Boolean(`--json`, false);

  static paths = [["run"]];
  async execute() {
    this.context.stdout.write(
      `Listing all the commands (json = ${this.json})\n`
    );
  }
}

const cli = new Cli<Context>({
  binaryLabel: `Yarn Project Manager`,
  binaryName: `yarn`,
  binaryVersion: `0.0.0`,
});

cli.register(Builtins.DefinitionsCommand);
cli.register(Builtins.HelpCommand);
cli.register(Builtins.TokensCommand);
cli.register(Builtins.VersionCommand);

cli.register(YarnRunListing);

const [node, app, ...args] = process.argv;
console.log(args);
cli.runExit(args, {
  cwd: process.cwd(),
  stdout: process.stdout,
  stdin: process.stdin,
});
