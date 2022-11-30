import React, { useState } from 'react'
import wordsArray from './words.json'

function randomWord() {
  return wordsArray[Math.floor(Math.random() * wordsArray.length)]
}
// function RandomWordGenerator() {
//   // return (
//   //   <ul>
//   //     <li>{wordsArray[Math.floor(Math.random() * wordsArray.length)]}</li>
//   //   </ul>
//   // )
// }

function AlphabetButtons() {
  const assignKey = (event) => {
    event.currentTarget.disabled = true
    const id = event.target.innerText
    console.log(id)
  }

  const liAlphabet = Array.from(Array(26))
    .map((e, i) => i + 65)
    .map((x) => String.fromCharCode(x))
    .map((letter) => (
      <li key={letter}>
        <button onClick={assignKey}>{letter}</button>
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
        <div>{randomWord()}</div>
        <ul>
          <li>_</li>
          <li>_</li>
          <li>_</li>
          <li>_</li>
          <li>_</li>
          <li>_</li>
          <li>_</li>
        </ul>
        <AlphabetButtons />
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
