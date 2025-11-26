// Effect can be wired in later; for now this module is synchronous and pure.
import type { CommentSample } from "./youtube.service";

export type CommentCluster = {
  id: string;
  label: string;
  sentiment: "positive" | "neutral" | "negative" | "mixed";
  commentCount: number;
  exampleComments: CommentSample[];
  suggestedAction: string;
};

export type CommentInsights = {
  videoId: string;
  clusters: CommentCluster[];
};

export function getCommentInsights(
  videoId: string,
  comments: CommentSample[],
): CommentInsights {
  if (comments.length === 0) {
    const emptyInsights: CommentInsights = {
      videoId,
      clusters: [],
    };
    return emptyInsights;
  }

  const clusters: CommentCluster[] = [
    {
      id: "clarity",
      label: "Asking for clarification",
      sentiment: "neutral",
      commentCount: comments.length,
      exampleComments: comments.slice(0, 2),
      suggestedAction:
        "Record a short follow-up video or pinned comment clarifying the most common questions.",
    },
  ];

  const insights: CommentInsights = {
    videoId,
    clusters,
  };

  return insights;
}


