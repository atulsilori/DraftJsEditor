
  import { useState } from 'react';
  import { Select } from 'antd';
  import { Button } from 'antd';
  import {RichUtils} from 'draft-js'
  import '../css/toolbarcomponent.css';
  const { Option } = Select;
  export function Heading1(props){
        const [selectValue, setSelectValue]=useState('headings')
        const {editorState, setEditorState}=props
        const _onH1Click=()=>{
          console.log(editorState)
          setEditorState(RichUtils.toggleInlineStyle(editorState, 'HEADING1'))
          setSelectValue('heading1')
        }
  
        const _onH2Click=()=>{
          console.log(editorState)
          setEditorState(RichUtils.toggleInlineStyle(editorState, 'HEADING2'))
          setSelectValue('heading2')
        }

        const _onH3Click=()=>{
          console.log(editorState)
          setEditorState(RichUtils.toggleInlineStyle(editorState, 'HEADING3'))
          setSelectValue('heading3')
        }
        
        const _onH4Click=()=>{
          console.log(editorState)
          setEditorState(RichUtils.toggleInlineStyle(editorState, 'HEADING4'))
          setSelectValue('heading4')
        }

        const _onH5Click=()=>{
          console.log(editorState)
          setEditorState(RichUtils.toggleInlineStyle(editorState, 'HEADING5'))
          setSelectValue('heading5')
        }

        const _onH6Click=()=>{
          console.log(editorState)
          setEditorState(RichUtils.toggleInlineStyle(editorState, 'HEADING6'))
          setSelectValue('heading6')
        }
        return(
            <Select defaultValue={selectValue} style={{ width: '12em'}}>
                  <Option value="headings">headings</Option>
                  <Option value="heading1" onClick={()=>{_onH1Click()}}><h1>heading1</h1></Option>
                  <Option value="heading2" onClick={()=>{_onH2Click()}}><h2>heading2</h2></Option>
                  <Option value="heading3" onClick={()=>{_onH3Click()}}><h3>heading3</h3></Option>
                  <Option value="heading4" onClick={()=>{_onH4Click()}}><h4>heading4</h4></Option>
                  <Option value="heading5" onClick={()=>{_onH5Click()}}><h5>heading5</h5></Option>
                  <Option value="heading6" onClick={()=>{_onH6Click()}}><h6>heading6</h6></Option>
            </Select>
        )
    }