import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-sm">
        <h1 className="mb-2 text-lg font-semibold text-zinc-900">
          YouTube insight workspace
        </h1>
        <p className="mb-6 text-sm text-zinc-600">
          This is the entry into your creator workspace. Sign in to view your
          dashboard and comment intelligence.
        </p>
        <div className="flex gap-3">
          <Link
            href="/(auth)/sign-in"
            className="inline-flex flex-1 items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 transition hover:bg-zinc-800"
          >
            Sign in
          </Link>
          <Link
            href="/(auth)/sign-up"
            className="inline-flex flex-1 items-center justify-center rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
          >
            Create account
          </Link>
        </div>
      </div>
    </main>
  );
}

