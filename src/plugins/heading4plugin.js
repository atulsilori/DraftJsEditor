import { RichUtils } from "draft-js";

export default () => {
  return {
    customStyleMap: {
      HEADING4: {
        display: "block",
        fontSize: "1em",
        marginTop: "0.67em",
        marginBottom: "0.67em",
        marginLeft: "0",
        marginRight: "0",
        fontWeight: "bold"
      }
    },
    keyBindingFn: e => {
      if (e.metaKey && e.key === "4") {
        return "heading4";
      }
    },
    handleKeyCommand: (command, editorState, { setEditorState }) => {
      if (command === "heading4") {
        setEditorState(RichUtils.toggleInlineStyle(editorState, "HEADING4"));
        return true;
      }
    }
  };
};