"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth/client";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGoogleSignUp = async (): Promise<void> => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="mb-6 text-lg font-semibold text-zinc-900">
          Create your account
        </h1>
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={handleGoogleSignUp}
            disabled={isLoading}
            className="inline-flex items-center justify-center rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 disabled:opacity-70"
          >
            Continue with Google (YouTube)
          </button>
          <p className="mt-4 text-xs text-zinc-500">
            We will request read-only access to your YouTube channel to build
            dashboards and comment insights.
          </p>
        </div>
      </div>
    </div>
  );
}


