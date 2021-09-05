//<UnderlineOutlined />
import {
    UnderlineOutlined
    } from '@ant-design/icons';
  import { Button } from 'antd';
  import {RichUtils} from 'draft-js'
  import '../css/toolbarcomponent.css';
  export function Underline(props){

    const {editorState, setEditorState}=props
    const _onUnderLineClick=()=>{
      console.log(editorState)
      setEditorState(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))
    }


    return(
      <Button  onClick={()=>{_onUnderLineClick()}} type={editorState.getCurrentInlineStyle().has('UNDERLINE')?"primary":"text"} className="element"><UnderlineOutlined /></Button>
    )
}