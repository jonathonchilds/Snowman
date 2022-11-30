import React, { useState } from 'react'
import wordsArray from './words.json'

const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]
// function RandomWordGenerator() {
//   // return (
//   //   <ul>
//   //     <li>{wordsArray[Math.floor(Math.random() * wordsArray.length)]}</li>
//   //   </ul>
//   // )
// }

function numsToUTF16Transformer() {
  return Array.from(Array(26)).map((e, i) => i + 65)
}

function AlphabetButtonGenerator() {
  const alphabet = numsToUTF16Transformer().map((x) => String.fromCharCode(x))
  const liAlphabet = alphabet.map((letter) => (
    <li key={letter}>
      <button onClick={handleClick}>{letter}</button>
    </li>
  ))
  return <ul>{liAlphabet}</ul>
}

const handleClick = (event) => {
  event.currentTarget.disabled = true
  console.log('button clicked')
}

export function App() {
  const [game, setGame] = useState(0)
  return (
    <>
      <h1>Do you want to build a snowman?</h1>
      <main className="d-flex">
        <img src="/snowman-images/step_7.png" height="300px"></img>
        <div>{randomWord}</div>
        <ul>
          <li>{game}</li>
          <li>{game}</li>
          <li>{game}</li>
          <li>{game}</li>
          <li>{game}</li>
          <li>{game}</li>
          <li>{game}</li>
        </ul>
        <AlphabetButtonGenerator />
      </main>
    </>
  )
}

//  I'm trying to determine if a word returned by RandomWordGenerator is equal to what is guessed by the user,
//  via the user pushing buttons.
//
//  How to get each button to recognize it's own value representation?
//
//  Compare each button press to if that value is contained within .randomWord: string
//
//  If it is, identify where (and grab that letter's index from .randomWord)
//
//  Method to return the index number of where a button matches a letter within .randomWord
//
//  Display the letter (utilizing the corresponding index) on the game board
