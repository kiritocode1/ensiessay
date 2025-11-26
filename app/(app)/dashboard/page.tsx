import { getDashboardSnapshot } from "@/lib/effect/youtube.service";

export default function DashboardPage() {
	// Later this should use the real authenticated user id.
	const snapshot = getDashboardSnapshot("creator");

	return (
		<div className="flex flex-col gap-6">
			<section>
				<h1 className="text-lg font-semibold text-zinc-900">
					Channel overview
				</h1>
				<p className="mt-1 text-sm text-zinc-600">
					Quick view of your channel and recent videos.
				</p>
				<div className="mt-4 flex gap-4">
					<div className="rounded-xl border border-zinc-200 bg-white p-4">
						<p className="text-xs font-medium uppercase text-zinc-500">
							Subscribers
						</p>
						<p className="mt-1 text-2xl font-semibold text-zinc-900">
							{snapshot.channel.subscriberCount.toLocaleString()}
						</p>
					</div>
					<div className="rounded-xl border border-zinc-200 bg-white p-4">
						<p className="text-xs font-medium uppercase text-zinc-500">
							Views
						</p>
						<p className="mt-1 text-2xl font-semibold text-zinc-900">
							{snapshot.channel.viewCount.toLocaleString()}
						</p>
					</div>
					<div className="rounded-xl border border-zinc-200 bg-white p-4">
						<p className="text-xs font-medium uppercase text-zinc-500">
							Videos
						</p>
						<p className="mt-1 text-2xl font-semibold text-zinc-900">
							{snapshot.channel.videoCount}
						</p>
					</div>
				</div>
			</section>

			<section>
				<h2 className="text-sm font-semibold text-zinc-900">
					Recent videos
				</h2>
				<div className="mt-3 grid gap-3 md:grid-cols-2">
					{snapshot.recentVideos.map((video) => (
						<div
							key={video.videoId}
							className="rounded-xl border border-zinc-200 bg-white p-4"
						>
							<p className="text-sm font-medium text-zinc-900">
								{video.title}
							</p>
							<p className="mt-1 text-xs text-zinc-500">
								{new Date(video.publishedAt).toLocaleDateString()}
							</p>
							<div className="mt-3 flex gap-4 text-xs text-zinc-600">
								<span>
									{video.viewCount.toLocaleString()} views
								</span>
								<span>
									{video.likeCount.toLocaleString()} likes
								</span>
								<span>
									{video.commentCount.toLocaleString()} comments
								</span>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}


