import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $insertNodes,
  COMMAND_PRIORITY_EDITOR,
  createCommand,
  LexicalCommand,
  TextNode,
} from "lexical";
import { useEffect } from "react";

import { $createEmojiNode, EmojiNode } from "../../nodes/EmojiNode";

export const INSERT_EMOJI_COMMAND: LexicalCommand<{
  emoji: string;
  index: number;
}> = createCommand("INSERT_EMOJI_COMMAND");

export default function EmojiPlugin(): JSX.Element | null {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    if (!editor.hasNodes([EmojiNode])) {
      throw new Error("EmojiPlugin: EmojiPlugin not registered on editor");
    }

    return editor.registerCommand<{
      emoji: string;
      index: number;
    }>(
      INSERT_EMOJI_COMMAND,
      (payload) => {
        const { emoji, index } = payload;
        const emojiNode = $createEmojiNode(emoji, index);
        const nodes = [emojiNode, new TextNode(" ")];

        const selection = $getSelection();
        if (selection?.getTextContent()) {
          selection.insertNodes(nodes);
        } else {
          $insertNodes(nodes);
        }
        return true;
      },
      COMMAND_PRIORITY_EDITOR
    );
  }, [editor]);

  return null;
}
