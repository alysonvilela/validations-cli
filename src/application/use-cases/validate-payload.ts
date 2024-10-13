import { SafeParseReturnType } from "zod";
import { getPayload } from "../../utils/win-utils";
import { ValidationSchemas, schemas } from "../lib/enums/schemas";

export interface ValidationOptions {
  payload: string;
  schema: ValidationSchemas;
  encodedJson: boolean;
}

type Result = SafeParseReturnType<
  {
    [x: string]: any;
  },
  {
    [x: string]: any;
  }
>;

export class ValidatePayloadSchemasUseCase {
  execute(params: ValidationOptions): Result {
    const data = getPayload(params);
    const result = schemas[params.schema as ValidationSchemas].safeParse(data);
    return result;
  }
}
