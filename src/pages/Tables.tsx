import { useState } from 'react';

import Breadcrumb from '../components/Breadcrumb';
import TableOne from '../components/TableOne';

import ProductCard from '../components/ProductCard';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Tables = () => {

  const [productsState,setProducts] = useState([
    {
      id: 1,
      designation: "Montre",
      quantite: 5,
      description: "Unite",
      src: "/src/images/product/product-01.png"
    },
    {
      id: 2,
      designation: "Mac Book",
      quantite: 2,
      description: "Unite",
      src: "/src/images/product/product-02.png"
    },
    {
      id: 3,
      designation: "Chaise",
      quantite: 20,
      description: "Unite",
      src: "/src/images/product/product-03.png"
    },
    {
      id: 4,
      designation: "Rice",
      quantite: 50,
      description: "Kg",
      src: "/src/images/product/product-04.png"
    },
    {
      id: 5,
      designation: "Huile",
      quantite: 5,
      description: "Litres",
      src: "/src/images/product/product-thumb.png"
    }
  ])

  return (
    <>
      <Breadcrumb pageName="Products" />

      <div className="flex flex-col gap-10">
        <div>
          <div className='flex flex-wrap w-full space-x-25'>
            {
              productsState.map((product) =>(
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  designation={product.designation}
                  quantite={product.quantite}
                  description={product.description}
                  src={product.src}
                />
              )
                
              )
            }
          </div>
          
          <div
            className="flex items-center justify-between bg-primary py-4 hover:bg-opacity-90 lg:px-8 xl:px-10 w-[15rem] rounded-full cursor-pointer"
          >
            <div className='text-white text-center font-medium'>See more</div>
            <ArrowForwardIcon sx={{ fontSize:30, color:"#fff" }}/>

          </div>

        </div>

        <TableOne
          products={productsState}
         />

      </div>
    </>
  );
};

export default Tables;
