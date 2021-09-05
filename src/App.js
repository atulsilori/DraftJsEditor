import { Typography, Divider } from 'antd';
import {React} from 'react'
//import {EditorState} from 'draft-js'
//import { QueryClient, QueryClientProvider} from 'react-query'
//import {Example} from './Example'
//import { ReactQueryDevtools } from 'react-query/devtools'
import 'antd/dist/antd.css';
import './App.css'
import {Myeditor} from './Editor'
import SketchExample from './testcolor'

const { Title, Paragraph} = Typography;
//const queryClient = new QueryClient()

function App() {

  return (

        <div className="App">
          <Typography>
          <Title>Draft Js</Title>
          <Paragraph>
              Draft.js is a framework for building rich text editors in React, powered by an immutable model and abstracting over cross-browser differences.
              Draft.js allows you to build any type of rich text input, whether you're only looking to support a few inline text styles or building a complex 
              text editor for composing long-form articles.
          </Paragraph>
          </Typography>
          <Divider/>
          {/*console.log(editorState)*/}
            {/*<SketchExample/>*/}
            <Myeditor/>

  {/*          <div>
          <QueryClientProvider client={queryClient}>
                <Example/>
                <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>           
          </div>
*/}
        </div>

  )
}

export default App;
