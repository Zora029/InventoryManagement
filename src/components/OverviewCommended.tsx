import CardOverview from "./CardOverview"

import { useState } from "react"

function OverviewCommended() {
  // fake data
  const [products, setProducts] = useState([
    {
      id: "P4587",
      src: "/src/images/product/product-02.png",
      unite: "unites",
      quantity: 10
    },
    {
      id: "P4588",
      src: "/src/images/product/product-03.png",
      unite: "unites",
      quantity: 11
    },
    {
      id: "P4589",
      src: "/src/images/product/product-04.png",
      unite: "unites",
      quantity: 8
    },
  ])

  return (
    <div className="bg-white dark:bg-boxdark">
          <div className='text-title-md font-bold text-black dark:text-white py-4 mx-auto w-[80%]'>
            Most ordered
          </div>
          <div className='h-0.5 bg-black dark:bg-white w-[80%] mx-auto my-1'></div>

          {/* Card Container */}
          <div className="flex flex-col gap-5 my-5 w-[80%] mx-auto pb-5">
            {products.map((product:any, index:number) => (
              <CardOverview 
              id={product.id}
              src={product.src}
              unite={product.unite}
              quantity={product.quantity} 
              key={index}/>
            ))}
            
          </div>
    </div>
  )
}

export default OverviewCommended