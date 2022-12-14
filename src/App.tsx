import React, { useState } from 'react'
import wordsArray from './words.json'

const randomWord =
  wordsArray[Math.floor(Math.random() * wordsArray.length)].toUpperCase()
// useEffect to press button and change it
// local storage

export function App() {
  const [guesses, setGuesses] = useState<string[]>([])

  function AlphabetButtons() {
    const liAlphabet = Array.from(Array(26))
      .map((e, i) => i + 65)
      .map((x) => String.fromCharCode(x))
      .map((letter) => (
        <li key={letter}>
          <button disabled={guesses.includes(letter)} onClick={assignKey}>
            {letter}
          </button>
        </li>
      ))
    return <ul>{liAlphabet}</ul>
  }
  function assignKey(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    const letter = event.currentTarget.innerText
    setGuesses([...guesses, letter])
  }

  return (
    <>
      <h1>Do you want to build a snowman?</h1>
      <main className="d-flex">
        <img src="/snowman-images/step_7.png" height="300px"></img>
        <ul>
          {randomWord.split('').map((letter, i) => (
            <li key={i}>{guesses.includes(letter) ? letter : '_'}</li>
          ))}
        </ul>
        <AlphabetButtons />
      </main>
    </>
  )
}

// ------------- PERSONAL NOTES -----------------
// function compareClickWithRandomWord() {
//   //  Compare each button press to if that value is contained within .randomWord: string
//   //
//   //  If it is, identify where (and grab that letter's index from .randomWord)
//   //
//   //  Method to return the index number of where a button matches a letter within .randomWord
//   //
//   //  Display the letter (utilizing the corresponding index) on the game board
//
// if (randomWord.includes(letter.toLowerCase())) {
//   for (let i = 0; i < randomWord.length; i++) {
//     if (randomWord[i] == letter.toLowerCase()) {
//       setWord(word.insert(i, letter))
//     }
//   }
// }
// turn the box red

//console.log(guessedWordArray)
// function transformClassName(letter: string): string | undefined {
//   if (letter) }

// do I need to make the ID a parameter of the object, assignKey?
