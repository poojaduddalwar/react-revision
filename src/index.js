import React from 'react'
import { render } from 'react-dom'

let skiData = {
  total: 50,
  powder: 20,
  backCountry: 20,
  goal: 100
}

const getPersent = decimal => {
  return decimal * 100 + '%'
}
const calGoal = (total, goal) => {
  return getPersent(total / goal)
}

const SkiDaysCounter = ({ total, powder, backCountry, goal }) => {

  return (
    <section>
      <div>Total : {total}</div>
      <div>Powder : {powder}</div>
      <div>Back Country : {backCountry}</div>
      <div>Goal Progress: {calGoal(total, goal)}</div>
    </section>
  )
}

render(
  <SkiDaysCounter total={skiData.total} powder={skiData.powder} backCountry={skiData.backCountry} goal={skiData.goal} />,

  document.getElementById('root')
)