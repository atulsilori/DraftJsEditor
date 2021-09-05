import { RichUtils } from "draft-js";

export default () => {
  return {
    customStyleMap: {
      HEADING1: {
        display: "block",
        fontSize: "0.67em",
        marginTop: "0.67em",
        marginBottom: "0.67em",
        marginLeft: "0",
        marginRight: "0",
        fontWeight: "bold"
      }
    },
    keyBindingFn: e => {
      if (e.metaKey && e.key === "6") {
        return "heading6";
      }
    },
    handleKeyCommand: (command, editorState, { setEditorState }) => {
      if (command === "heading6") {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "HEADING6"));
        return true;
      }
    }
  };
};