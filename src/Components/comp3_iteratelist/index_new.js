import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

let billionaires = [
  { name: 'Bill Gates', email: 'billg@microsoft.com' },
  { name: 'Jeff Bezos', email: 'jeff@amazon.com' },
  { name: 'Mark Zuckerberg', email: 'zuck@fb.com' },
]

// Your React elements will go here.
let elements = []
for (let i = 0; i < billionaires.length; i++) {
  let contact = billionaires[i]
  let names = contact.name.split(' ')
  let initials = names.map(name => name[0].toUpperCase()).join('')
  let element =
    <div className='Contact' key={i}>
      <div className='Contact-avatar'>{initials}</div>
      <span className='Contact-name'>{contact.name}</span>
      <a href={'mailto:'+contact.email}>
        {contact.email}
      </a>
    </div>
  elements.push(element)
}

ReactDOM.render(
  <div className='ContactList'>{elements}</div>,
  document.getElementById('root')
)