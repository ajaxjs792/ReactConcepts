import React from 'react'
import ReactDOM from 'react-dom'

let isMorning = new Date().getHours() < 12

let greeting
if (isMorning) {
  greeting = React.createElement(
    'h1',
    {
      style: { color: 'green' },
    },
    "Good Morning, Dave."
  )
}
else {
  greeting = React.createElement(
    'h1',
    {
      style: { color: 'turquoise' },
    },
    "Hello, Dave."
  )
}

ReactDOM.render(
  greeting,
  document.getElementById('root')
)