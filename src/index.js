import React, { Component } from 'react'
import { render } from 'react-dom'

let skiData = {
  total: 50,
  powder: 20,
  backCountry: 20,
  goal: 100
}
class SkiDaysCounter extends Component {


  getPersent = decimal => {
    return decimal * 100 + '%'
  }
  calGoal = (total, goal) => {
    return this.getPersent(total / goal)
  }
  render() {
    const { total, powder, backCountry, goal } = this.props
    return (
      <section>
        <div>Total : {total}</div>
        <div>Powder : {powder}</div>
        <div>Back Country : {backCountry}</div>
        <div>Goal Progress: {this.calGoal(total, goal)}</div>
      </section>
    )
  }
}


render(
  <SkiDaysCounter total={skiData.total} powder={skiData.powder} backCountry={skiData.backCountry} goal={skiData.goal} />,

  document.getElementById('root')
)