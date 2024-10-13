import { Command, Option } from "commander";
import {
  ValidatePayloadSchemasUseCase,
  ValidationOptions,
} from "../../../application/use-cases/validate-payload";
import { ValidationSchemas } from "../../../application/lib/enums/schemas";
import { commanderEncodedOption } from "../../../utils/commander-encoded-option";
import { cliRequest } from "../../cli-request";

const schemaOption = new Option("-s, --schema <schemas>", "Schema to validate")
  .makeOptionMandatory(true)
  .choices(Object.values(ValidationSchemas));

const payloadOption = new Option(
  "-p, --payload <string>",
  "Payload of the request"
).makeOptionMandatory(true);

const commanderValidatePayloadSchemas = new Command()
  .command("validate")
  .description("Validate a payload")
  .addOption(schemaOption)
  .addOption(payloadOption)
  .addOption(commanderEncodedOption)
  .action((params: ValidationOptions): undefined => {
    const validateSchemasUseCase = new ValidatePayloadSchemasUseCase();
    const result = validateSchemasUseCase.execute(params);
    cliRequest.response(JSON.stringify(result));
  });

export { commanderValidatePayloadSchemas };
