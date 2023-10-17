import { useState,useEffect} from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [products,setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000')
    .then(products => setProducts(products.data))
    .catch(err => console.log(err))
  },[])


  return (
    <>
    <h1>Product</h1>

        <div>
          { products.map(product => {
            return (<div> 
              <div> {product.P_Name} </div>
              <div> {product.P_Brand} </div>
              <div> {product.Price} </div>
            </div>)
          })
          }
        </div>
    </>
  )
}

export default App
