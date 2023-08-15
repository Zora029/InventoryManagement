import { useState, useEffect } from 'react';

import Breadcrumb from '../components/Breadcrumb';
import TableOne from '../components/TableOne';

import ProductCard from '../components/ProductCard';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import ProductDataService from '../services/ProductDataService';
import ProductTypes from '../types/ProductTypes';
import { getAllResources, createResource } from '../services/ProductCRUD';

const Tables = () => {

  const [productsState,setProducts] = useState<ProductTypes[]>([]);

  useEffect(() => {
    // Récupérer les ressources lors du montage du composant
    fetchResources();
  }, []);

  const fetchResources = async () => {
    const data = await getAllResources();
    setProducts(data);
  };

  const handleCreateResource = async (newResourceData:ProductTypes) => {
    const createdResource = await createResource(newResourceData);
    if (createdResource) {
      // La création a réussi, mettez à jour la liste des ressources
      fetchResources();
    }
  };

  return (
    <>
      <Breadcrumb pageName="Products" />

      <div className="flex flex-col gap-10">
        <div>
          <div className='flex flex-wrap w-full gap-5 justify-center'>
            {productsState.length !== 0 ? (
              productsState.map((product, index: number) =>(
                <ProductCard 
                  key={index}
                  num_produit={product.num_produit}
                  design={product.design}
                  quantite={product.quantite}
                  description={product.description}
                  image={product.image}
                />
              ))
              ) : (
                <div>Aucun element</div>
              )
            }
          </div>
          
          <div
            className="flex items-center justify-between bg-primary py-4 hover:bg-opacity-90 lg:px-8 xl:px-10 w-[15rem] rounded-full cursor-pointer mx-auto"
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
