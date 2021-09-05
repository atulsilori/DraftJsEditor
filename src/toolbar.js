import {Bold} from './toolbarcomponent/bold'
import {Italics} from './toolbarcomponent/italics' 
import { Underline } from './toolbarcomponent/underline'
import {Code} from './toolbarcomponent/code'
import {Unorderedlist} from './toolbarcomponent/unorderedlist'
import {Strikethrough} from './toolbarcomponent/strikethrough'
import {Highlight} from './toolbarcomponent/highlight'
import {Heading1} from './toolbarcomponent/heading'

export function Toolbar(props){
    const {editorState, setEditorState}=props
      return(
          <>
          <div className="icons-list">
              <Bold editorState={editorState} setEditorState={setEditorState}/>
              <Italics editorState={editorState} setEditorState={setEditorState}/>
              <Underline editorState={editorState} setEditorState={setEditorState}/>
              <Code editorState={editorState} setEditorState={setEditorState}/>
              <Strikethrough editorState={editorState} setEditorState={setEditorState}/>
              <Highlight editorState={editorState} setEditorState={setEditorState}/>
              <Unorderedlist editorState={editorState} setEditorState={setEditorState}/>
              <Heading1 editorState={editorState} setEditorState={setEditorState}/>
          </div>
          </>
      )
  }