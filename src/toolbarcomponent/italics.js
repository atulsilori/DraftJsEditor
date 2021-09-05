import {
  ItalicOutlined
  } from '@ant-design/icons';
import { Button } from 'antd';
import {RichUtils} from 'draft-js'

export function Italics(props){
      const {editorState, setEditorState}=props
      const _onItalicsClick=()=>{
        console.log(editorState)
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
      }
      return(
        <Button onClick={()=>{_onItalicsClick()}} type={editorState.getCurrentInlineStyle().has('ITALIC')?"primary":"text"} className="element"><ItalicOutlined /></Button>
      )
  }