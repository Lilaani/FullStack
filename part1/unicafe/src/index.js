import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const prosentti = " %"
const Statistics = (props) => {
    
  if (props.good + props.neutral + props.bad === 0) {
    return (<div><p>Statistics:</p><p>No feedback given.</p></div> )
  } 
  return(
    <table><tbody>
      <StatisticLine text="Statistics:" value = "" />
      <StatisticLine text="Good" value = {props.good} />
      <StatisticLine text="Neutral" value = {props.neutral} />
      <StatisticLine text="Bad" value = {props.good + props.neutral + props.bad} />
      <StatisticLine text="Average" value = {(props.good*1 + props.bad*-1) / (props.good + props.neutral + props.bad)} />
      <StatisticLine text="Positive" value =  {props.good / (props.good + props.neutral + props.bad) * 100 + prosentti} />
    </tbody></table>
  )
  }

const StatisticLine = (props) =>{ return (<tr><td>{props.text}</td><td>&nbsp;&nbsp;</td><td>{props.value}</td></tr>) }  

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <p>Give feedback</p>
      <form>
      <input type="button" value="good" onClick={() => setGood(good + 1)}/> 
      <input type="button" value="neutral" onClick={() => setNeutral(neutral + 1)} /> 
      <input type="button" value="bad" onClick={() => setBad(bad + 1)} /> 
      </form>      
    <br/>
    <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)