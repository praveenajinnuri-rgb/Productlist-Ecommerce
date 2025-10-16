// import React, { useEffect,useState } from 'react'
// import './App.css'
// function App() {
// var [data,setData]=useState([])
// async function fetchData() {
//   var result=await fetch("https://fakestoreapi.com/products")
//   var myresult=await result.json()
//   setData(myresult)
//   console.log(data);
// }
//  useEffect(()=>{
//   fetchData()
//  },[]) 
  



// return(
//     <div id='main'>
//       {
//         data.map((item)=>{return(
//         <div>
//           <h1>{item.title}</h1>
//           <h1>{item.price}</h1>
//           <img id='image'src={item.image}alt="" />
//           </div>
//         )
//       })
//       }
  

//     </div>
//   )
  
// }
// export default App

// return (
//     <div id="main">
//       {data.length > 0 ? (
//         data.map((item) => (
//           <div key={item.id}>
//             <h1>{item.title}</h1>
//             <h1>₹{item.price}</h1>
//             <img id="image" src={item.image} alt={item.title} />
//           </div>
//         ))
//       ) : (
//         <h2>Loading...</h2>
//       )}
//     </div>
//   );
// }

// export default App;


import React from 'react'
import Products from './Products'
import Users from './Users'

function App() {
  return(

    <div>
      <Products />
      <Users />
    </div>
  )
  
}

export default App