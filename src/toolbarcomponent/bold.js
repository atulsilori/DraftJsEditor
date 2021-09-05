import {
  BoldOutlined
  } from '@ant-design/icons';
import { Button } from 'antd';
import {RichUtils} from 'draft-js'
import '../css/toolbarcomponent.css';
  
export function Bold(props){

      const {editorState, setEditorState}=props
      const _onBoldClick=()=>{
        console.log(editorState)
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
      }


      return(
        <Button  onClick={()=>{_onBoldClick()}} type={editorState.getCurrentInlineStyle().has('BOLD')?"primary":"text"} className="element"><BoldOutlined /></Button>
      )
  }