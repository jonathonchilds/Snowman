import React from 'react'

function AlphabetCreator() {
  const alphaArray = Array.from(Array(26)).map((e, i) => i + 65)
  const alphabet = alphaArray.map((x) => String.fromCharCode(x))
  const liAlphabet = alphabet.map((letter) => (
    <li key={letter}>
      <button>{letter}</button>
    </li>
  ))
  return <ul>{liAlphabet}</ul>
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
