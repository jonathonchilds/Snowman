import React from 'react'

const alphabet = Array.from(Array(26).keys())

function AlphabetCreator() {
  const newAlphabet = alphabet.map((letter) => (
    <li key={letter}>
      <button>{letter}</button>
    </li>
  ))
  return <ul>{newAlphabet}</ul>
}

export function App() {
  return (
    <>
      <h1>Do you want to build a snowman?</h1>
      <main className="d-flex">
        <img src="/snowman-images/step_7.png" height="300px"></img>
        <AlphabetCreator />
      </main>
    </>
  )
}
