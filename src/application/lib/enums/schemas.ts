import { ZodObject } from "zod";
import { protestoSchema } from "../../lib/dtos/protesto-schema";
import { registerTodoSchema } from "../../lib/dtos/register-todo-schema";
import { removeTodoSchema } from "../../lib/dtos/remove-todo-schema";

export enum ValidationSchemas {
  PROTESTO = "protesto",
  REGISTER_TODO = "register_todo",
  REMOVE_TODO = "remove_todo",
}

export const schemas: Record<ValidationSchemas, ZodObject<any>> = {
  [ValidationSchemas.PROTESTO]: protestoSchema,
  [ValidationSchemas.REGISTER_TODO]: registerTodoSchema,
  [ValidationSchemas.REMOVE_TODO]: removeTodoSchema,
};
