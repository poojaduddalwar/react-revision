import React from 'react'
import { render } from 'react-dom'

const Book = ({ title, author, pages }) => {

  return (
    <section>
      <h2>{title}</h2>
      <p>by : {author}</p>
      <p>Pages : {pages} pages</p>
    </section>
  )
}

const Library = () => {

  return (
    <div>
      <Book title="the sun Also rises" author="Ernest Hemingway" pages={260} />
    </div>
  )
}

render(
  <Library />,

  document.getElementById('root')
)