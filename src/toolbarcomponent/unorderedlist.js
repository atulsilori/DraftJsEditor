//<UnorderedListOutlined />
import {
    UnorderedListOutlined
    } from '@ant-design/icons';
  import { Button } from 'antd';
  import {RichUtils} from 'draft-js'
  import '../css/toolbarcomponent.css';
    
  export function Unorderedlist(props){
  
        const {editorState, setEditorState}=props
        const _onBulletClick=()=>{
          console.log(editorState)
          setEditorState(RichUtils.toggleBlockType(editorState, 'unordered-list-item'))
        }
  
  
        return(
          <Button  onClick={()=>{_onBulletClick()}} type={editorState.getCurrentInlineStyle().has('unordered-list-item')?"primary":"text"} className="element"><UnorderedListOutlined /></Button>
        )
    }