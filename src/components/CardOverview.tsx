import React from 'react';

// props:
// src : string
// designation : string
// unite : string
// quantite : float 
// bg-[#ececec]

function CardOverview() {
  return (
    <div className="h-[100] cursor-pointer rounded-lg relative">
        <img
            className="w-full h-full object-cover"
            src="/src/images/product/product-01.png"
        />
        <div className="absolute bottom-0 bg-[#ececec] bg-opacity-75 z-50 w-full rounded-lg">
        <div className="flex-col space-y-2 p-2">
        <div className="flex justify-between">
          <div className="text-[14px]">Identifiant</div>
          <div className="text-[14px] font-bold">F3400</div>
        </div>
        {/* <div className="flex justify-between">
          <div className="text-[14px]">Designation</div>
          <div className="text-[14px] font-light">Jordan 11</div>
        </div> */}
        <div className="flex justify-between">
          <div className="text-[14px]">Quantite</div>
          <div className="text-[14px] font-bold">
            1 unite
          </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default CardOverview