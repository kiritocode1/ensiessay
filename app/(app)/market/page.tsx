import { getMarketOverview } from "@/lib/effect/market.service";

const DEFAULT_NICHE = "youtube growth";

export default function MarketPage() {
	const overview = getMarketOverview(DEFAULT_NICHE);

	return (
		<div className="flex flex-col gap-6">
			<section>
				<h1 className="text-lg font-semibold text-zinc-900">Market radar</h1>
				<p className="mt-1 text-sm text-zinc-600">A quick pulse on topics and channels in your niche.</p>
			</section>

			<section className="grid gap-4 md:grid-cols-2">
				<div className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4">
					<p className="text-sm font-semibold text-zinc-900">Topics</p>
					{overview.topics.map((topic) => (
						<div
							key={topic.id}
							className="rounded-lg bg-zinc-50 p-3 text-xs text-zinc-700"
						>
							<p className="font-medium text-zinc-900">{topic.label}</p>
							<p className="mt-1">
								{topic.exampleVideos} example videos, {topic.avgViews.toLocaleString()} avg views
							</p>
							<p className="mt-1">
								Opportunity score: {Math.round(topic.opportunityScore * 100)}
								/100
							</p>
							<p className="mt-1">{topic.notes}</p>
						</div>
					))}
				</div>

				<div className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4">
					<p className="text-sm font-semibold text-zinc-900">Competitors</p>
					{overview.competitors.map((channel) => (
						<div
							key={channel.channelId}
							className="rounded-lg bg-zinc-50 p-3 text-xs text-zinc-700"
						>
							<p className="font-medium text-zinc-900">{channel.title}</p>
							<p className="mt-1">
								{channel.subscriberCount.toLocaleString()} subs, {channel.avgViews.toLocaleString()} avg views
							</p>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
