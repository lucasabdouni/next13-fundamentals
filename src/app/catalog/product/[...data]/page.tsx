import { AddToCartButton } from './add-to-card-button'

interface ProdutsProps {
  params: {
    data: string[]
  }
}

export default async function Catalog({ params }: ProdutsProps) {
  const [productId, size, color] = params.data

  return (
    <div>
      <h1>{productId}</h1>
      <h2>{size}</h2>
      <h3>{color}</h3>

      <AddToCartButton />
    </div>
    // <h1>{JSON.stringify(props)}</h1>
  )
}
