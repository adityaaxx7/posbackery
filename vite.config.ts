import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@supabase/supabase-js",
        "dexie",
        "dexie-react-hooks",
        "recharts",
        "lucide-react",
        "date-fns",
      ],
      exclude: ["@electric-sql/pglite"],
    },
  },
});
