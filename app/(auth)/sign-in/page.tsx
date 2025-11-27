"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth/client";

type ProviderButtonProps = {
  label: string;
  onClick: () => void;
  disabled: boolean;
};

function ProviderButton(props: ProviderButtonProps) {
  const { label, onClick, disabled } = props;
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGoogleSignIn = async (): Promise<void> => {
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
          Sign in
        </h1>
        <div className="flex flex-col gap-3">
          <ProviderButton
            label="Continue with Google (YouTube)"
            onClick={handleGoogleSignIn}
            disabled={isLoading}
          />
          <p className="mt-4 text-xs text-zinc-500">
            Email and password sign-in can be added later. For now, use Google
            to connect your YouTube channel.
          </p>
        </div>
      </div>
    </div>
  );
}


