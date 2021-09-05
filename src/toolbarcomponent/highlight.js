//<HighlightOutlined />
import {
    HighlightOutlined
    } from '@ant-design/icons';
  import { Button } from 'antd';
  import {RichUtils} from 'draft-js'
  import '../css/toolbarcomponent.css';
    
  export function Highlight(props){
  
        const {editorState, setEditorState}=props
        const _onHighlightClick=()=>{
          console.log(editorState)
          setEditorState(RichUtils.toggleInlineStyle(editorState, 'HIGHLIGHT'))
        }
  
  
        return(
          <Button  onClick={()=>{_onHighlightClick()}} type={editorState.getCurrentInlineStyle().has('HIGHLIGHT')?"primary":"text"} className="element"><HighlightOutlined /></Button>
        )
    }