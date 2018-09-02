import React, { Component } from 'react'
import './App.css'
import Question from './components/Question'
import Answer from './components/Answer'

class App extends Component {
  render() {
    const alexiasQuestion = 'Do you love me???'
    const answerList = [
      'Aries',
      'Taurus',
      'Gemini',
      'Cancer',
      'Leo',
      'Virgo',
      'Libra',
      'Scorpio',
      'Sagittarius',
      'Capricorn',
      'Aquarius',
      'Pisces',
      "Zodiac signs aren't real",
    ]

    return (
      <div className="App">
        <h1>IQ Test</h1>
        <Question questionText="What is your Zodiac sign?" />
        {/* <Question questionText={alexiasQuestion} /> */}
        {answerList.map(function(answer) {
          return <Answer answerText={answer} alertText={generateAnswerText(answer)} />
        })}
      </div>
    )
  }
}

export default App
/* function generateAnswerText(answer) {
  if (answer === "Zodiac signs aren't real") {
    return 'You passed'
  } else {
    return 'You failed'
  }
}
*/

function generateAnswerText(answer) {
  return answer === "Zodiac signs aren't real" ? 'You Passed' : 'You Failed'
}
