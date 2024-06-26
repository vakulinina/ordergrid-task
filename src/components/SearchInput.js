import { useState, useCallback } from 'react'

export function SearchInput({ onSubmit }) {
  const [input, setInput] = useState('')

  const handleInput = useCallback(
    ({ target }) => {
      setInput(target.value)
    },
    [setInput]
  )

  const handleSubmit = () => {
    onSubmit(input)
  }

  return (
    <div>
      <input value={input} onInput={handleInput} />{' '}
      <button type="button" onClick={handleSubmit}>
        Search
      </button>
    </div>
  )
}
