//<StrikethroughOutlined />
import {
    StrikethroughOutlined
    } from '@ant-design/icons';
  import { Button } from 'antd';
  import {RichUtils} from 'draft-js'
  import '../css/toolbarcomponent.css';
    
  export function Strikethrough(props){
  
        const {editorState, setEditorState}=props
        const _onStrikethroughClick=()=>{
          console.log(editorState)
          setEditorState(RichUtils.toggleInlineStyle(editorState, 'STRIKETHROUGH'))
        }
  
  
        return(
          <Button  onClick={()=>{_onStrikethroughClick()}} type={editorState.getCurrentInlineStyle().has('STRIKETHROUGH')?"primary":"text"} className="element"><StrikethroughOutlined /></Button>
        )
    }