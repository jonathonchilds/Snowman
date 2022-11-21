import React from 'react'
import wordsArray from './words.json'

function RandomWordGenerator(): string {
  const wordsList = wordsArray
  const randomWord = wordsList[Math.floor(Math.random() * wordsList.length)]
  return randomWord
}
console.log(RandomWordGenerator())

function AlphabetGenerator() {
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
        <button onClick={() => RandomWordGenerator()}>
          Press here for a random word!
        </button>
        <ul>
          <li>{} </li>
        </ul>
        <AlphabetGenerator />
      </main>
    </>
  )
}
