// <CodeOutlined />
import {
    CodeOutlined
    } from '@ant-design/icons';
  import { Button } from 'antd';
  import {RichUtils} from 'draft-js'
  import '../css/toolbarcomponent.css';

  export function Code(props){

    const {editorState, setEditorState}=props
    const _onCodeClick=()=>{
      console.log(editorState)
      setEditorState(RichUtils.toggleInlineStyle(editorState, 'CODE'))
    }


    return(
      <Button  onClick={()=>{_onCodeClick()}} type={editorState.getCurrentInlineStyle().has('CODE')?"primary":"text"} className="element"><CodeOutlined /></Button>
    )
}