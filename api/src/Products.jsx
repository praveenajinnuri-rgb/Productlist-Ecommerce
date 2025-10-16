import React, { useEffect,useState } from 'react'
import './Products.css'
function Products() {
var [data,setData]=useState([])
async function fetchData() {
  var result=await fetch("https://fakestoreapi.com/products")
  var myresult=await result.json()
  setData(myresult)
  console.log(data);
}
 useEffect(()=>{
  fetchData()
 },[]) 
 
return(
//     <div id='main'>
//       {
//         data.map((products)=>{return(
//         <div>
//           <h1>{products.title}</h1>
//           <h1>{products.price}</h1>
//           <img id='image'src={products.image}alt="" />
//           </div>
//         )
//       })
//       }
  

//     </div>
//   )
  
// }
// export default App/


    <div className="app-container">
      <header className="app-name">🛍️ Product List</header>

      <div className="main">
        {data.map((products) => (
          <div className="card" key={products.id}>
            <img className="image" src={products.image} alt={products.title} />
            <h1 className="title">{products.title}</h1>
            <p className="price"><b>Price:</b> ${products.price}</p>

            <div className="btn-container">
              <button className="buy-btn">Buy Now</button>
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;