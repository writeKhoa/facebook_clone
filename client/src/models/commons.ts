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
