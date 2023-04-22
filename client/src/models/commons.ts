import { FC } from "react";

export type PageProps = FC;

export interface Route {
  Page: PageProps;
  path: string;
  isPrivate: boolean;
}

export interface QuickInfo {
  avatarUrl: string;
  fullName: string;
  id: string;
}

export interface User {
  _id: string;
  avatarUrl: string;
  mediumAvatarUrl: string;
  fullName: string;
  firstName: string;
}
