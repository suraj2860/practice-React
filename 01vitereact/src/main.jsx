import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//const reactElement = (<p>Lorem ipsum dolor sit amet.</p>)

const test = "test";
const anotherElement = React.createElement(
  'button',
  {className: "mybutton"},
  `click ${test} Me `,
  test
)

ReactDOM.createRoot(document.getElementById('root')).render(
  anotherElement
)
