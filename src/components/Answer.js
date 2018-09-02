import React from 'react'

export default function Answer(props) {
  return (
    <p
      onClick={function() {
        alert(props.alertText)
      }}
    >
      {props.answerText}
    </p>
  )
}
