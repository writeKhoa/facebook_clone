import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    // vite config
    base: "/",
    plugins: [react(), tsconfigPaths()],
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  };
});
