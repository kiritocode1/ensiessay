export type MarketTopic = {
	id: string;
	label: string;
	exampleVideos: number;
	avgViews: number;
	opportunityScore: number;
	notes: string;
};

export type CompetitorChannel = {
	channelId: string;
	title: string;
	subscriberCount: number;
	avgViews: number;
};

export type MarketOverview = {
	niche: string;
	topics: MarketTopic[];
	competitors: CompetitorChannel[];
};

export function getMarketOverview(niche: string): MarketOverview {
	const overview: MarketOverview = {
		niche,
		topics: [
			{
				id: "retention-breakdowns",
				label: "Retention graph breakdowns",
				exampleVideos: 18,
				avgViews: 32000,
				opportunityScore: 0.82,
				notes: "Strong demand and relatively few deep dives. Consider a repeatable series.",
			},
			{
				id: "thumbnail-reviews",
				label: "Live thumbnail reviews",
				exampleVideos: 25,
				avgViews: 21000,
				opportunityScore: 0.7,
				notes: "Good engagement; works well as a livestream or quick-cut format.",
			},
		],
		competitors: [
			{
				channelId: "comp-1",
				title: "Creator Lab",
				subscriberCount: 245000,
				avgViews: 26000,
			},
			{
				channelId: "comp-2",
				title: "Title Lab",
				subscriberCount: 98000,
				avgViews: 18000,
			},
		],
	};

	return overview;
}
