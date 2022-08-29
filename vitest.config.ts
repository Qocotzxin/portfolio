import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "vitest-setup.ts",
    alias: {
      "@ui": path.resolve(__dirname, "./components/ui"),
      "@features": path.resolve(__dirname, "./components/features"),
      "@styles": path.resolve(__dirname, "./styles"),
    },
  },
});
