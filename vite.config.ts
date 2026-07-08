import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  plugins: [tanstackRouter(), tanstackStart(), react(), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
