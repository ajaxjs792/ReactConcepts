import { createElement } from 'react'
import ReactDOM from 'react-dom'

let element = createElement(
  'div',
  {},

  createElement(
    'div',
    {
      style: { backgroundColor: 'red', width: 100, height: 100 }
    },
    
    null,
    'h',
    undefined,
    'i',
    false,
    '!',
  ),
)

ReactDOM.render(
  element,
  document.getElementById('root')
)