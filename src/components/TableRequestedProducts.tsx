import { useState } from "react";

function TableRequestedProducts() {
  const [products, setProducts] = useState([
    {
      id: "P5698",
      img: "/src/images/product/product-01.png",
      name: "Rollex",
      periode_start: "2023-03-01",
      periode_end: "2023-04-01",
      unite: "unite",
      quantity: 105
    },
    {
      id: "P5698",
      img: "/src/images/product/product-01.png",
      name: "Dior watch",
      periode_start: "2023-04-01",
      periode_end: "2023-05-01",
      unite: "boite",
      quantity: 10
    },
    {
      id: "P5698",
      img: "/src/images/product/product-01.png",
      name: "Casio",
      periode_start: "2023-05-01",
      periode_end: "2023-06-01",
      unite: "unite",
      quantity: 96
    },
  ])

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Most requested products
        </h4>
      </div>

      {/* <div className='w-full mx-2 my-2 border-b-2 border-b-[#9e9d9d]'></div> */}

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Identifiants
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Designation
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Product Name
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Periode
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Quantities
            </h5>
          </div>
        </div>

        {products.map((product:any, index:number) => (
          <div className="grid transform cursor-pointer grid-cols-3 border-b border-stroke bg-white hover:shadow-lg dark:border-strokedark dark:bg-boxdark sm:grid-cols-5">
          {/* Boucle tableau */}

          <div className="p-2.5 xl:p-5">
            <p className="text-black dark:text-white">
              {product.id}
            </p>
          </div>
          <div className="flex items-center gap-3 p-2.5 xl:p-5 ">
            <p className="hidden text-black dark:text-white sm:block"></p>
            <div className="flex flex-shrink-0">
              <div className="h-[3rem] w-[3rem]">
                <img
                  src={`${product.img}`}
                  alt="Brand"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-black dark:text-white">
              {product.name}
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-meta-3">{product.periode_start} - {product.periode_end}</p>
          </div>

          <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
            <p className="text-black dark:text-white">{product.quantity} {product.unite}</p>
          </div>
          {/* end Boucle tableau */}
        </div>
        ))}
        
      </div>
    </div>
  );
}

export default TableRequestedProducts;
