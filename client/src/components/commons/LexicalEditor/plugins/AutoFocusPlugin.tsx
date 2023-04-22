import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";

const AutoFocusEditorPlugin = () => {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    if (editor) {
      editor.focus();
    }
  }, [editor]);
  return null;
};

export default AutoFocusEditorPlugin;
