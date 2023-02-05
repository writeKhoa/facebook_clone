export interface ItemProfile {
  Icon: () => JSX.Element;
  title: string;
  type: "link" | "nav" | "function" | "back" | "adjust";
  path?: string;
  subTitle?: string;
  func?: "logout";
  adjust?: "theme" | string; 
  children?: ItemProfile[];
}
