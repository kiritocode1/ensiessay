import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {
		BETTER_AUTH_GOOGLE_CLIENT_ID: z.string().min(1),
		BETTER_AUTH_GOOGLE_CLIENT_SECRET: z.string().min(1),
		NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
	},
	clientPrefix: "NEXT_PUBLIC_",
	client: {},
	runtimeEnv: {
		BETTER_AUTH_GOOGLE_CLIENT_ID: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID,
		BETTER_AUTH_GOOGLE_CLIENT_SECRET: process.env.BETTER_AUTH_GOOGLE_CLIENT_SECRET,
		NODE_ENV: process.env.NODE_ENV,
	},
});
