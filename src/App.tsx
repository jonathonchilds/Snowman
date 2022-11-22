import React, { useState } from 'react'
import wordsArray from './words.json'

const [game, setGame] = useState<Game>({
  board: ['', '', '', '', '', '', ''],
  winner: undefined,
  state: undefined,
})

const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]
type Game = {
  state: string | undefined
  winner: string | undefined
}

// function RandomWordGenerator() {

//   // return (
//   //   <ul>
//   //     <li>{wordsArray[Math.floor(Math.random() * wordsArray.length)]}</li>
//   //   </ul>
//   // )
// }

function AlphabetGenerator() {
  const alphaArray = Array.from(Array(26)).map((e, i) => i + 65) // <-- transforms number to UTF-16 character
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
        <ul>
          <li>Li</li>
          <li>Li</li>
          <li>Li</li>
          <li>Li</li>
          <li>Li</li>
          <li>Li</li>
          <li>Li</li>
        </ul>
        <AlphabetGenerator />
      </main>
    </>
  )
}

//  I'm trying to determine if a word returned by RandomWordGenerator is equal to what is guessed by the user,
//  via the user pushing buttons.
//  probably contained
//  within a list, the number of buttons equal to the length of the word
//
