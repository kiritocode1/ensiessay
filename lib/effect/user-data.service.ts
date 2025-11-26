export type ConnectedChannel = {
	id: string;
	youtubeChannelId: string;
	title: string;
	primary: boolean;
};

export type UserProfile = {
	id: string;
	email: string;
	name: string | null;
	imageUrl: string | null;
	channels: ConnectedChannel[];
};

export function getUserProfile(userId: string): UserProfile {
	const profile: UserProfile = {
		id: userId,
		email: "creator@example.com",
		name: "Creator",
		imageUrl: null,
		channels: [
			{
				id: "profile-channel-1",
				youtubeChannelId: "mock-channel",
				title: "Mock Channel",
				primary: true,
			},
		],
	};

	return profile;
}
