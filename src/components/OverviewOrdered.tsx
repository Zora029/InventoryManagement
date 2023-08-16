import CardOverview from './CardOverview';

import { ImostRequestedProductThisMonth } from '../types/index';

interface IOverviewOrderedProps {
  data: ImostRequestedProductThisMonth[];
}

function OverviewOrdered({ data }: IOverviewOrderedProps) {
  return (
    <div className="bg-white dark:bg-boxdark">
      <div className="mx-auto w-[80%] py-4 text-title-xsm font-bold text-black dark:text-white">
        Most requested this month
      </div>
      <div className="mx-auto my-1 h-0.5 w-[80%] bg-black dark:bg-white"></div>

      {/* Card Container */}
      <div className="my-5 mx-auto flex w-[80%] flex-col gap-5 pb-5">
        {data.map((product, index) => (
          <CardOverview
            id={product.product_name}
            src={'/src/images/product/product-01.png'}
            unite={'Unite'}
            quantity={product.ordered_quantity}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default OverviewOrdered;
