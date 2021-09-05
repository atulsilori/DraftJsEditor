import {EditorState} from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import React from 'react';
import 'draft-js/dist/Draft.css';
import {Toolbar} from './toolbar'
import {emojiPlugin} from './plugins/emojiplugin'
import createHighlightPlugin from './plugins/highlightplugin'

import createHeading1Plugin from './plugins/heading1plugin'
import createHeading2Plugin from './plugins/heading2plugin'
import createHeading3Plugin from './plugins/heading3plugin'
import createHeading4Plugin from './plugins/heading4plugin'
import createHeading5Plugin from './plugins/heading5plugin'
import createHeading6Plugin from './plugins/heading6plugin'

const highlightPlugin = createHighlightPlugin();

const Heading1Plugin = createHeading1Plugin();
const Heading2Plugin = createHeading2Plugin();
const Heading3Plugin = createHeading3Plugin();
const Heading4Plugin = createHeading4Plugin();
const Heading5Plugin = createHeading5Plugin();
const Heading6Plugin = createHeading6Plugin();

const {EmojiSuggestions} = emojiPlugin

export function Myeditor() {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );
    return (
      <>
        <Toolbar editorState={editorState} setEditorState={setEditorState}/>
        <div className="editor">
          <Editor 
          editorState={editorState} 
          onChange={setEditorState} 
          plugins={[emojiPlugin, highlightPlugin, Heading1Plugin, Heading2Plugin, Heading3Plugin, Heading4Plugin, Heading5Plugin, Heading6Plugin]} 
          placeholder="Enter some text..."/>
          <EmojiSuggestions/>
        </div>
      </>
    )
}