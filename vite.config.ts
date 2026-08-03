import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served from the root of a GitHub User Site
  // (https://sabrinahartung.github.io/), so the base path is "/".
  //
  // 👉 If you ever move this to a Project Page
  //    (https://<user>.github.io/<repo>/), set base to "/<repo>/" for the
  //    production build instead.
  base: "/",
});
