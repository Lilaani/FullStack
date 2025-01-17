import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points , setPoints] = useState([0,0,0,0,0,0])

  const handleNext = () => {
    setSelected(Math.floor(Math.random() * 6))
    //console.log("Next " + selected)    
  }
  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    //console.log("Vote " + selected)
  }

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {points[selected]}  votes.</p>
      <form>
      <input type="button" value="Vote" onClick={handleVote} /> 
      <input type="button" value="Next anecdote" onClick={handleNext} /> 
      </form> 

      <p>Anecdote with most votes</p>
      <p>{props.anecdotes[points.indexOf(Math.max(...points))]}</p>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
