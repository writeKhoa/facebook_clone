import type { Spread } from "lexical";

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

export type SerializedMentionNode = Spread<
  {
    mentionUser: string;
    userId: string;
    type: "mention-user";
    version: 1;
  },
  SerializedTextNode
>;

function convertMentionElement(
  domNode: HTMLElement,
  userId: string
): DOMConversionOutput | null {
  const textContent = domNode.textContent;
  if (textContent !== null) {
    const node = $createMentionNode(textContent, userId);
    return {
      node,
    };
  }
  return null;
}

const mentionUserStyle = "background-color: rgba(24, 119, 232, 0.2)";
export class MentionNode extends TextNode {
  __mention: string;
  __userId: string;

  static getType(): string {
    return "mention-user";
  }

  static clone(node: MentionNode): MentionNode {
    return new MentionNode(
      node.__mention,
      node.__userId,
      node.__text,
      node.__key
    );
  }
  static importJSON(serializedNode: SerializedMentionNode): MentionNode {
    const node = $createMentionNode(
      serializedNode.mentionUser,
      serializedNode.userId
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
    userId: string,
    text?: string,
    key?: NodeKey
  ) {
    super(text ?? mentionUser, key);
    this.__mention = mentionUser;
    this.__userId = userId;
  }

  exportJSON(): SerializedMentionNode {
    return {
      ...super.exportJSON(),
      mentionUser: this.__mention,
      userId: this.__userId,
      type: "mention-user",
      version: 1,
    };
  }

  createDOM(config: EditorConfig): HTMLElement {
    const dom = super.createDOM(config);
    dom.style.cssText = mentionUserStyle;
    return dom;
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement("span");
    element.setAttribute("data-lexical-mention", "true");
    element.textContent = this.__mention;
    return { element };
  }

  // static importDOM(): DOMConversionMap | null {
  //   return {
  //     span: (domNode: HTMLElement) => {
  //       if (!domNode.hasAttribute("data-lexical-mention")) {
  //         return null;
  //       }
  //       return {
  //         conversion: convertMentionElement(domNode, userId),
  //         priority: 1,
  //       };
  //     },
  //   };
  // }

  isTextEntity(): true {
    return true;
  }
}

export function $createMentionNode(
  mentionUser: string,
  userId: string
): MentionNode {
  const mentionNode = new MentionNode(mentionUser, userId);
  mentionNode.setMode("segmented").toggleDirectionless();
  return $applyNodeReplacement(mentionNode);
}

export function $isMentionNode(
  node: LexicalNode | null | undefined
): node is MentionNode {
  return node instanceof MentionNode;
}
