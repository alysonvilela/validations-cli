import { z } from "zod";

const removeTodoSchema = z.object({
  id: z.string(),
});

export type IRemoveTodoInput = z.infer<typeof removeTodoSchema>;

export { removeTodoSchema };
