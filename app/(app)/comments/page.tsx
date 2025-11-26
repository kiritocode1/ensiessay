import { getCommentInsights } from "@/lib/effect/comment-analysis.service";
import { getVideoComments } from "@/lib/effect/youtube.service";

const MOCK_VIDEO_ID = "video-1";

export default function CommentsPage() {
	const comments = getVideoComments(MOCK_VIDEO_ID);
	const insights = getCommentInsights(MOCK_VIDEO_ID, comments.comments);

	return (
		<div className="flex flex-col gap-6">
			<section>
				<h1 className="text-lg font-semibold text-zinc-900">Comment intelligence</h1>
				<p className="mt-1 text-sm text-zinc-600">Clusters of what your audience is actually saying on a single video.</p>
			</section>

			<section className="grid gap-4 md:grid-cols-2">
				{insights.clusters.map((cluster) => (
					<div
						key={cluster.id}
						className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4"
					>
						<div>
							<p className="text-sm font-semibold text-zinc-900">{cluster.label}</p>
							<p className="mt-1 text-xs text-zinc-500">
								{cluster.commentCount} comments, sentiment: {cluster.sentiment}
							</p>
						</div>
						<div className="space-y-2">
							{cluster.exampleComments.map((comment) => (
								<div
									key={comment.commentId}
									className="rounded-lg bg-zinc-50 p-2"
								>
									<p className="text-xs font-medium text-zinc-800">{comment.authorDisplayName}</p>
									<p className="mt-1 text-xs text-zinc-700">{comment.text}</p>
								</div>
							))}
						</div>
						<p className="text-xs text-zinc-600">{cluster.suggestedAction}</p>
					</div>
				))}
			</section>
		</div>
	);
}
