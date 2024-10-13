import { z } from "zod";

const registerTodoSchema = z.object({
  name: z.string(),
});

export type IRegisterTodoInput = z.infer<typeof registerTodoSchema>;

export { registerTodoSchema };
