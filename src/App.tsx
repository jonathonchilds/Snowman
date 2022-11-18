import React from 'react'

const alphabet = Array(26)
  .fill(null)
  .map((_, i) => i)

function alphabetCreator() {
  alphabet.forEach((element) => console.log(element))
}

export function App() {
  return (
    <div>
      <h1>Do you want to build a snowman?</h1>
      <main className="d-flex">
        <img src="/snowman-images/step_7.png" height="300px"></img>
        <section>{alphabetCreator()}</section>
      </main>
    </div>
  )
}
