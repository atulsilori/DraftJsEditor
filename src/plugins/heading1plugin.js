import { RichUtils } from "draft-js";

export default () => {
  return {
    customStyleMap: {
      HEADING1: {
        display: "block",
        fontSize: "2em",
        marginTop: "0.67em",
        marginBottom: "0.67em",
        marginLeft: "0",
        marginRight: "0",
        fontWeight: "bold"
      }
    },
    keyBindingFn: e => {
      if (e.metaKey && e.key === "1") {
        return "heading1";
      }
    },
    handleKeyCommand: (command, editorState, { setEditorState }) => {
      if (command === "heading1") {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "HEADING1"));
        return true;
      }
    }
  };
};