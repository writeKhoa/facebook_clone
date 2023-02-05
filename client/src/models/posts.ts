export interface PostModel {
  type: "user" | "group" | "page" | "ad";

  fullName: string;
  avatarUrl: string;
  createAt?: any;
  audience: number;

  title?: string;
  image?: string;

  commentCount: number;
  likeCount: number;
  shareCount: number;
}
