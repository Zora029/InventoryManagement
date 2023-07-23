import React, {useState, useEffect, useRef}  from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import ProductTypes from "../types/ProductTypes"

const ProductCard: React.FC<ProductTypes> = ({
    id,
    designation,
    quantite,
    description,
    src
  }) => {
    const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
//   const imagePath = `${process.env.PUBLIC_URL}/images/${src}`;
console.log(src);


  const handleClick = (event:any) => {
    event.stopPropagation()
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleOutsideClick = (event:any) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div 
        className="dark:bg-gray-800 dark:border-gray-700 w-[20rem] rounded-lg bg-white shadow relative my-5 transform transition-transform hover:scale-110 hover:shadow-lg cursor-pointer"
        ref={cardRef}
    >
        <div
            className='myCard absolute right-3 top-3 h-[1.5rem] w-[1.5rem] rounded-full z-50 flex justify-center items-center cursor-pointer'
            onClick={handleClick}
        >
            <MoreVertIcon sx={{ fontSize:30 }}/>
        </div>

        {isVisible && (
            <div
                className="absolute right-8 top-3 w-[5rem] bg-[#696666] flex-col"
                
            >   
                <div className='text-lg text-white p-1 cursor-pointer'>Edit</div>
                <div className='w-full h-0.5 bg-white my-1'></div>
                <div className='text-lg text-white p-1 cursor-pointer'>Delete</div>

            </div>
        )}
        
        <img
            className="object-cover w-full h-48"
            src={src}
        />
        
      <div className="p-5 flex-col space-y-4">
        <div className="flex justify-between">
            <div className='text-xl font-bold'>Matricule</div>
            <div className=''>{id}</div>
        </div>
        <div className="flex justify-between">
            <div className='text-xl font-bold'>Designation</div>
            <div className=''>{designation}</div>
        </div>
        <div className="flex justify-between">
            <div className='text-xl font-bold'>Quantite</div>
            <div className=''>{quantite} {description}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
