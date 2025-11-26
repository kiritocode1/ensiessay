import Link from "next/link";
import type { ReactNode } from "react";

type AppLayoutProps = {
	children: ReactNode;
};

export default function AppLayout(props: AppLayoutProps) {
	const { children } = props;

	return (
		<div className="flex min-h-screen bg-zinc-50">
			<aside className="flex w-56 flex-col border-r border-zinc-200 bg-white px-4 py-6">
				<div className="mb-6 text-sm font-semibold text-zinc-900">
					Creator workspace
				</div>
				<nav className="flex flex-1 flex-col gap-2 text-sm">
					<Link
						href="/(app)/dashboard"
						className="rounded-md px-2 py-1.5 text-zinc-800 hover:bg-zinc-100"
					>
						Dashboard
					</Link>
					<Link
						href="/(app)/comments"
						className="rounded-md px-2 py-1.5 text-zinc-800 hover:bg-zinc-100"
					>
						Comments
					</Link>
					<Link
						href="/(app)/market"
						className="rounded-md px-2 py-1.5 text-zinc-800 hover:bg-zinc-100"
					>
						Market
					</Link>
				</nav>
			</aside>
			<main className="flex-1 px-6 py-6">{children}</main>
		</div>
	);
}


