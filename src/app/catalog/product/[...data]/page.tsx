interface ProdutsProps {
  params: {
    data: string[]
  }
}

export default function Catalog({ params }: ProdutsProps) {
  const [productId, size, color] = params.data

  return (
    <>
      <h1>{productId}</h1>
      <h2>{size}</h2>
      <h3>{color}</h3>
    </>
    // <h1>{JSON.stringify(props)}</h1>
  )
}
