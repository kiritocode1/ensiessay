export type ChannelOverview = {
	channelId: string;
	title: string;
	thumbnailUrl: string;
	subscriberCount: number;
	viewCount: number;
	videoCount: number;
};

export type VideoSummary = {
	videoId: string;
	title: string;
	publishedAt: string;
	viewCount: number;
	likeCount: number;
	commentCount: number;
};

export type DashboardSnapshot = {
	channel: ChannelOverview;
	recentVideos: VideoSummary[];
};

export type CommentSample = {
	commentId: string;
	authorDisplayName: string;
	text: string;
	likeCount: number;
	publishedAt: string;
};

export type VideoComments = {
	videoId: string;
	comments: CommentSample[];
};

export function getDashboardSnapshot(userId: string): DashboardSnapshot {
	const mockDashboard: DashboardSnapshot = {
		channel: {
			channelId: userId,
			title: "Mock Channel",
			thumbnailUrl: "/file.svg",
			subscriberCount: 123456,
			viewCount: 9876543,
			videoCount: 120,
		},
		recentVideos: [
			{
				videoId: "video-1",
				title: "How I structure my YouTube week",
				publishedAt: new Date().toISOString(),
				viewCount: 12000,
				likeCount: 800,
				commentCount: 240,
			},
			{
				videoId: "video-2",
				title: "3 thumbnails that doubled CTR",
				publishedAt: new Date().toISOString(),
				viewCount: 8500,
				likeCount: 520,
				commentCount: 130,
			},
		],
	};

	return mockDashboard;
}

export function getVideoComments(videoId: string): VideoComments {
	const mockComments: VideoComments = {
		videoId,
		comments: [
			{
				commentId: "c-1",
				authorDisplayName: "Viewer One",
				text: "This clarified so much about titles.",
				likeCount: 14,
				publishedAt: new Date().toISOString(),
			},
			{
				commentId: "c-2",
				authorDisplayName: "Viewer Two",
				text: "Can you do a deep dive on retention graphs?",
				likeCount: 7,
				publishedAt: new Date().toISOString(),
			},
		],
	};

	return mockComments;
}
