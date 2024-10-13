import { z } from "zod";

const protestoSchema = z.object({
  name: z.string(),
});

export type IProtestoSchema = z.infer<typeof protestoSchema>;

export { protestoSchema };
