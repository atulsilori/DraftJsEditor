import { RichUtils } from "draft-js";

export default () => {
  return {
    customStyleMap: {
      HEADING1: {
        display: "block",
        fontSize: "0.83em",
        marginTop: "0.67em",
        marginBottom: "0.67em",
        marginLeft: "0",
        marginRight: "0",
        fontWeight: "bold"
      }
    },
    keyBindingFn: e => {
      if (e.metaKey && e.key === "5") {
        return "heading5";
      }
    },
    handleKeyCommand: (command, editorState, { setEditorState }) => {
      if (command === "heading5") {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "HEADING5"));
        return true;
      }
    }
  };
};