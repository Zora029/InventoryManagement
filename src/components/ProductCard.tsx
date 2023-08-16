import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import ProductTypes from '../types/ProductTypes';

import { deleteResource } from '../services/ProductCRUD';

import ConfirmBoxDelete from './MessageBox/ConfirmBoxDelete';

import { IProductCardProps } from '../types';

const ProductCard = ({
  num_produit,
  design,
  quantite,
  description,
  image,
  onReload
}: IProductCardProps) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirmationModalOpen, setisConfirmationModalOpen] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: any) => {
    event.stopPropagation();
    setIsVisible(!isVisible);
  };

  const handleEdit = (num_produit: any) => {
    navigate(`/product/form/${num_produit}`);
  };

  const handleDelete = (num_produit: any) => {
    deleteResource(num_produit);
    setTimeout(()=> {
      onReload();
    }, 2500)
    
  };

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    console.log('Image source : ' + image);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div
      className="dark:bg-gray-800 dark:border-gray-700 relative my-5 w-[20rem] transform cursor-pointer rounded-lg bg-white shadow transition-transform hover:scale-110 hover:shadow-lg"
      ref={cardRef}
    >
      <div
        className="myCard absolute right-3 top-3 z-50 flex h-[1.5rem] w-[1.5rem] cursor-pointer items-center justify-center rounded-full"
        onClick={handleClick}
      >
        <MoreVertIcon sx={{ fontSize: 30 }} />
      </div>

      {isVisible && (
        <div className="absolute right-8 top-3 w-[5rem] flex-col bg-[#696666]">
          <div
            className="cursor-pointer p-1 text-lg text-white"
            onClick={() => handleEdit(num_produit)}
          >
            Edit
          </div>
          <div className="my-1 h-0.5 w-full bg-white"></div>
          <div
            className="cursor-pointer p-1 text-lg text-white"
            onClick={() => setisConfirmationModalOpen(true)}
          >
            Delete
          </div>
          {isConfirmationModalOpen && (
            <ConfirmBoxDelete
              onConfirm={handleDelete}
              setisOpen={setisConfirmationModalOpen}
              num_produit={num_produit}
            />
          )}
        </div>
      )}

      <img
        className="h-48 w-full object-cover"
        src={`/src/images/product/${image}`}
      />

      <div className="flex-col space-y-4 p-5">
        <div className="flex justify-between">
          <div className="text-xl font-bold">Identifiant</div>
          <div className="">{num_produit}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-xl font-bold">Designation</div>
          <div className="">{design}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-xl font-bold">Quantite</div>
          <div className="">
            {quantite} {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
