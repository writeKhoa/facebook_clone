import { useEditorPostState, usePosts } from "@/hooks";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useEffect } from "react";

const UpdatePostPlugin = () => {
  const { setPostCreate, setPostEdit, modeEditor } = usePosts();
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(
      ({ editorState, dirtyElements, dirtyLeaves }) => {
        if (dirtyElements.size === 0 && dirtyLeaves.size === 0) return;
        const serializedState = JSON.stringify(editorState);
        if (modeEditor === "edit") {
          setPostEdit((pre) => {
            return {
              ...pre,
              content: serializedState,
            };
          });
        } else {
          setPostCreate((pre) => {
            return {
              ...pre,
              content: serializedState,
            };
          });
        }
      }
    );
  }, [editor]);

  return null;
};

export default UpdatePostPlugin;
