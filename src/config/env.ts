import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  /*
   * Serverside Environment variables, not available on the client.
   * Will throw if you access these variables on the client.
   */
  server: {
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    NEXT_RUNTIME: z.enum(["nodejs", "edge"]).default("nodejs"),
    // Optional: only needed if you want live GitHub stats in the Stats section.
    // Without it, the GitHub API route falls back to unauthenticated rate limits.
    GITHUB_TOKEN: z.string().min(1).optional(),
    // Optional: only needed if you want the "Portfolio views" stat wired up to Umami.
    UMAMI_API_KEY: z.string().min(1).optional(),
  },
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_APP_URL: z.url().default("http://localhost:3000"),
    NEXT_PUBLIC_GITHUB_USERNAME: z.string().min(1),
    NEXT_PUBLIC_AVAILABLE_STATUS: z.coerce.boolean().default(true),
    // Optional: leave unset to skip loading the Umami analytics script entirely.
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: z.string().min(1).optional(),
  },

  /*
   * Due to how Next.js bundles environment variables on Edge and Client,
   * we need to manually destructure them to make sure all are included in bundle.
   *
   * 💡 You'll get type errors if not all variables from `server` & `client` are included here.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_RUNTIME: process.env.NEXT_RUNTIME,
    NEXT_PUBLIC_GITHUB_USERNAME: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    UMAMI_API_KEY: process.env.UMAMI_API_KEY,
    NEXT_PUBLIC_AVAILABLE_STATUS: process.env.NEXT_PUBLIC_AVAILABLE_STATUS,
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
  },

  emptyStringAsUndefined: true,
});

export default env;
