import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src", "!src/__tests__/**", "!src/**/*.test.*", "!src/**/*.spec.*"],
  // splitting: false,
  // sourcemap: true,
  // clean: true,
});
