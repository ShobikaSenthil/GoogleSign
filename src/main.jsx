import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Routing from './Routing'
import Dat19PerformanceIssue from './React-Practice/PerformanceIssue'
import UseIdExample from './React-Practice/UseIdExample'
// import './index.css'
import WithStyledComponentExample from './React-Practice/Styled-Component'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Routing/> */}
    {/* <Dat19PerformanceIssue/> */}
    {/* <UseIdExample/> */}
    <WithStyledComponentExample/>
  </React.StrictMode>,
)
