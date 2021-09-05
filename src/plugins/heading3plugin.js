import { RichUtils } from "draft-js";

export default () => {
  return {
    customStyleMap: {
      HEADING1: {
        display: "block",
        fontSize: "1.17em",
        marginTop: "0.67em",
        marginBottom: "0.67em",
        marginLeft: "0",
        marginRight: "0",
        fontWeight: "bold"
      }
    },
    keyBindingFn: e => {
      if (e.metaKey && e.key === "3") {
        return "heading3";
      }
    },
    handleKeyCommand: (command, editorState, { setEditorState }) => {
      if (command === "heading3") {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "HEADING3"));
        return true;
      }
    }
  };
};