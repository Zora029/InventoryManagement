import { ImostRequestedProduct } from '../types/index';

interface ITableRequestedProductsProps {
  data: ImostRequestedProduct[];
}

function TableRequestedProducts({ data }: ITableRequestedProductsProps) {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Most requested products
        </h4>
      </div>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Identifiants
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Product Name
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Quantities
            </h5>
          </div>
        </div>

        {data.map((product, index: number) => (
          <div
            key={index}
            className="grid transform cursor-pointer grid-cols-3 border-b border-stroke bg-white hover:shadow-lg dark:border-strokedark dark:bg-boxdark"
          >
            <div className="p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {product.num_produit}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {product.product_name}
              </p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">
                {product.ordered_quantity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableRequestedProducts;
