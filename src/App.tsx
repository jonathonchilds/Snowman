import React, { useState } from 'react'
import wordsArray from './words.json'

export function App() {
  // state & setState used for the selected Random Word?
  // updated the state with letters missing and re-render

  const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]

  // function compareClickWithRandomWord() {
  //   //  Compare each button press to if that value is contained within .randomWord: string
  //   //
  //   //  If it is, identify where (and grab that letter's index from .randomWord)
  //   //
  //   //  Method to return the index number of where a button matches a letter within .randomWord
  //   //
  //   //  Display the letter (utilizing the corresponding index) on the game board
  // }

  function AlphabetButtons() {
    const liAlphabet = Array.from(Array(26))
      .map((e, i) => i + 65)
      .map((x) => String.fromCharCode(x))
      .map((letter) => (
        <li key={letter}>
          <button onClick={assignKey}>{letter}</button>
        </li>
      ))
    return <ul>{liAlphabet}</ul>

    function assignKey(event) {
      event.currentTarget.disabled = true
      const letter = event.target.innerText
      if (randomWord.includes(letter.toLowerCase())) {
        console.log(letter)
      } else console.log('nope')
    }

    // do I need to make the ID a parameter of the object, assignKey?
  }

  console.log()

  // if (randomWord.includes(usable)) {
  //   console.log('yay')
  // } else console.log(id)

  return (
    <>
      <h1>Do you want to build a snowman?</h1>
      <main className="d-flex">
        <img src="/snowman-images/step_7.png" height="300px"></img>
        <div>{randomWord}</div>
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
