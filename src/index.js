import React from 'react'
import ReactDOM from 'react-dom'


class Message extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello pd!</h1>
      </div>
    )
  }
}

// var style = {
//   backgroundColor: 'pink',
//   color: 'grey',
//   fontSize: 20,
//   margin: '20px',
//   paddingLeft: '50px',
//   paddingTop: '50px',
//   paddingBottom: '50px'
// }

// const title = React.createElement(
//   'ul',
//   { id: 'title', className: 'header', style: style },
//   "Hello pd",
//   React.createElement(
//     'li',
//     {},
//     "one"
//   ),
//   React.createElement(
//     'li',
//     {},
//     "one"
//   )
// )

ReactDOM.render(
  // <div style={style}>
  //   <h1 id='heading-id'>Hello pd</h1>
  //   <ul>
  //     <li>one</li>
  //     <li>two</li>
  //     <li>three</li>
  //   </ul>
  // </div>,

  // title,

  <Message />,
  document.getElementById('root')
)