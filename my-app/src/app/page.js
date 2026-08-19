import  AddToCart from "../../components/AddToCart"

export default async function Home(){

  const product = {
      name: "MacBook Pro",
    price: 1999,
    description: "A powerful laptop for developers.",
  }

  return (

   <main>

     <h1>{product.name}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>

      <AddToCart/>
   </main>

  )
}