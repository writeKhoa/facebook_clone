import type { Spread } from "lexical";
import { emojiConfig } from "@/configs";

import {
  type DOMConversionMap,
  type DOMConversionOutput,
  type DOMExportOutput,
  type EditorConfig,
  type LexicalNode,
  type NodeKey,
  type SerializedTextNode,
  $applyNodeReplacement,
  TextNode,
} from "lexical";

export type SerializedEmojiNode = Spread<
  {
    mentionUser: string;
    index: number;
    type: "emoji";
    version: 1;
  },
  SerializedTextNode
>;

export class EmojiNode extends TextNode {
  __emoji: string;
  __index: number;

  static getType(): string {
    return "emoji";
  }

  static clone(node: EmojiNode): EmojiNode {
    return new EmojiNode(node.__emoji, node.__index, node.__text, node.__key);
  }
  static importJSON(serializedNode: SerializedEmojiNode): EmojiNode {
    const node = $createEmojiNode(
      serializedNode.mentionUser,
      serializedNode.index
    );
    node.setTextContent(serializedNode.mentionUser);
    node.setFormat(serializedNode.format);
    node.setDetail(serializedNode.detail);
    node.setMode(serializedNode.mode);
    node.setStyle(serializedNode.style);
    return node;
  }

  constructor(
    mentionUser: string,
    index: number,
    text?: string,
    key?: NodeKey
  ) {
    super(text ?? mentionUser, key);
    this.__emoji = mentionUser;
    this.__index = index;
  }

  exportJSON(): SerializedEmojiNode {
    return {
      ...super.exportJSON(),
      mentionUser: this.__emoji,
      index: this.__index,
      type: "emoji",
      version: 1,
    };
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = super.createDOM(config);
    const wrapperDom = document.createElement("span");
    const src = emojiConfig[this.__index].src;
    wrapperDom.style.backgroundImage = `url(${src})`;
    wrapperDom.style.backgroundSize = "20px 20px";
    wrapperDom.style.cursor = "default";
    wrapperDom.style.backgroundRepeat = "no-repeat";
    dom.classList.add("text-2024", "px-.5", "opacity-0", "text-center");
    wrapperDom.append(dom);
    return wrapperDom;
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement("span");
    element.setAttribute("data-lexical-mention", "true");
    element.textContent = this.__emoji;
    return { element };
  }

  isTextEntity(): true {
    return true;
  }
}

export function $createEmojiNode(
  mentionUser: string,
  index: number
): EmojiNode {
  const emojiNode = new EmojiNode(mentionUser, index);
  emojiNode.setMode("segmented").toggleDirectionless();
  return $applyNodeReplacement(emojiNode);
}

export function $isEmojiNode(
  node: LexicalNode | null | undefined
): node is EmojiNode {
  return node instanceof EmojiNode;
}
