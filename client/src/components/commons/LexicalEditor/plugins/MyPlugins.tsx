import React from "react";
import AutoFocusPlugin from "./AutoFocusPlugin";
import AutoLinkPlugin from "./AutoLinkPlugin";
import { HashtagPlugin } from "./HashtagPlugin";
import MentionPlugin from "./MentionPlugin";
import UpdatePostPlugin from "./UpdatePostPlugin";
import { EmojiPlugin } from "./EmojiPlugin";

const MyPlugins = () => {
  return (
    <>
      <AutoFocusPlugin />
      <AutoLinkPlugin />
      <HashtagPlugin />
      <MentionPlugin />
      <UpdatePostPlugin />
      <EmojiPlugin />
    </>
  );
};

export default MyPlugins;
