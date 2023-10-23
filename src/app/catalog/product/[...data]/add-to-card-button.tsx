'use client'

import { useState } from 'react'

export function AddToCartButton() {
  const [count, setCount] = useState(0)

  function addToAcart() {
    setCount((state) => state + 1)
  }
  return <button onClick={addToAcart}>Adicionar ao carrinho ({count})</button>
}
