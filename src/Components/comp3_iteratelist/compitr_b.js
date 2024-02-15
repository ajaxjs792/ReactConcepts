
import React from 'react'
import ReactDOM from 'react-dom'
// import './styles.css'

// import { billionaires } from './billionaires.js'

export let billionaires = [
    {
      name: 'Bill Gates',
      email: 'billg@microsoft.com',
      photoURL: 'https://frontarm.com/courses/react-fundamentals/bill-gates.jpg'
    },
    {
      name: 'Jeff Bezos',
      email: 'jeff@amazon.com',
      photoURL: 'https://frontarm.com/courses/react-fundamentals/jeff-bezos.jpg'
    },
    {
      name: 'Mark Zuckerberg',
      email: 'zuck@fb.com'
    },
  ] 

  
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











//   import React from 'react'
// import ReactDOM from 'react-dom'
// import './styles.css'
// import { billionaires } from './billionaires.js'

// let elements = []
// for (let i = 0; i < billionaires.length; i++) {
//   let contact = billionaires[i]
//   let names = contact.name.split(' ')
//   let initials = names.map(name => name[0].toUpperCase()).join('')
//   let avatar
//   if (contact.photoURL) {
//     avatar =
//       <div className='Contact-avatar'>
//         {initials}
//         <img src={contact.photoURL} />
//       </div>
//   }
//   else {
//     avatar = <div className='Contact-avatar'>{initials}</div>
//   }
  
//   let element =
//     <div className='Contact' key={i}>
//       {avatar}
//       <span className='Contact-name'>
//         {contact.name}
//       </span>
//       <a href={"mailto:"+contact.email}>
//         {contact.email}
//       </a>
//     </div>
//   elements.push(element)
// }

// ReactDOM.render(
//   <div className='ContactList'>{elements}</div>,
//   document.getElementById('root')
// )