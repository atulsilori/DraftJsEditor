import { RichUtils } from "draft-js";

export default () => {
  return {
    customStyleMap: {
      HEADING2: {
        display: "block",
        fontSize: "1.5em",
        marginTop: "0.67em",
        marginBottom: "0.67em",
        marginLeft: "0",
        marginRight: "0",
        fontWeight: "bold"
      }
    },
    keyBindingFn: e => {
      if (e.metaKey && e.key === "2") {
        return "heading2";
      }
    },
    handleKeyCommand: (command, editorState, { setEditorState }) => {
      if (command === "heading2") {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "HEADING2"));
        return true;
      }
    }
  };
};