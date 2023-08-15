import React from 'react';

interface CardOverviewProps {
  id: string;
  src: string;
  unite: string;
  quantity: number; // assuming quantity is a number
}

function CardOverview({id, src, unite, quantity}: CardOverviewProps) {
  return (
    <div className="h-[100] cursor-pointer rounded-lg relative">
        <img
            className="w-full h-full object-cover"
            src={`${src}`}
        />
        <div className="absolute bottom-0 bg-[#ececec] bg-opacity-75 z-50 w-full rounded-lg">
        <div className="flex-col space-y-2 p-2">
        <div className="flex justify-between">
          <div className="text-[14px]">Identifiant</div>
          <div className="text-[14px] font-bold">{id}</div>
        </div>
        <div className="flex justify-between">
          <div className="text-[14px]">Quantity</div>
          <div className="text-[14px] font-bold">
            {quantity} {unite}
          </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default CardOverview