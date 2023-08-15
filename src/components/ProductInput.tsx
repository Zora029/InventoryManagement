import React from 'react';
import { IProductInputProps } from '../types/index';

const ProductInput: React.FC<IProductInputProps> = ({
  useMax,
  selectedProduct,
  availableProducts,
  index,
  onChange,
  onRemove,
}) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    onChange(index, { ...selectedProduct, [name]: value });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name == 'qt') {
      if (useMax) {
        const max = availableProducts.filter(
          (product) => product.num_produit == selectedProduct.num_produit
        )[0].quantite;
        const val: number = parseFloat(value) > max ? max : parseFloat(value);
        onChange(index, { ...selectedProduct, [name]: val });
      } else {
        const val: number = parseFloat(value);
        onChange(index, { ...selectedProduct, [name]: val });
      }
    } else {
      // If I want to use another input
      onChange(index, { ...selectedProduct, [name]: value });
    }
  };

  return (
    <div className="flex flex-row gap-2 px-6.5 pb-4 pt-0">
      <div className="w-full">
        <label className="mb-3 block text-black dark:text-white">
          Select Product
        </label>
        <div className="relative z-20 bg-white dark:bg-form-input">
          <span className="absolute top-1/2 left-4 z-30 -translate-y-1/2">
            <svg
              className="fill-primary dark:fill-white"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.1063 18.0469L19.3875 3.23126C19.2157 1.71876 17.9438 0.584381 16.3969 0.584381H5.56878C4.05628 0.584381 2.78441 1.71876 2.57816 3.23126L0.859406 18.0469C0.756281 18.9063 1.03128 19.7313 1.61566 20.3844C2.20003 21.0375 2.99066 21.3813 3.85003 21.3813H18.1157C18.975 21.3813 19.8 21.0031 20.35 20.3844C20.9 19.7656 21.2094 18.9063 21.1063 18.0469ZM19.2157 19.3531C18.9407 19.6625 18.5625 19.8344 18.15 19.8344H3.85003C3.43753 19.8344 3.05941 19.6625 2.78441 19.3531C2.50941 19.0438 2.37191 18.6313 2.44066 18.2188L4.12503 3.43751C4.19378 2.71563 4.81253 2.16563 5.56878 2.16563H16.4313C17.1532 2.16563 17.7719 2.71563 17.875 3.43751L19.5938 18.2531C19.6282 18.6656 19.4907 19.0438 19.2157 19.3531Z"
                fill=""
              />
              <path
                d="M14.3345 5.29375C13.922 5.39688 13.647 5.80938 13.7501 6.22188C13.7845 6.42813 13.8189 6.63438 13.8189 6.80625C13.8189 8.35313 12.547 9.625 11.0001 9.625C9.45327 9.625 8.1814 8.35313 8.1814 6.80625C8.1814 6.6 8.21577 6.42813 8.25015 6.22188C8.35327 5.80938 8.07827 5.39688 7.66577 5.29375C7.25327 5.19063 6.84077 5.46563 6.73765 5.87813C6.6689 6.1875 6.63452 6.49688 6.63452 6.80625C6.63452 9.2125 8.5939 11.1719 11.0001 11.1719C13.4064 11.1719 15.3658 9.2125 15.3658 6.80625C15.3658 6.49688 15.3314 6.1875 15.2626 5.87813C15.1595 5.46563 14.747 5.225 14.3345 5.29375Z"
                fill=""
              />
            </svg>
          </span>
          <select
            required
            name="num_produit"
            value={selectedProduct.num_produit}
            onChange={handleSelectChange}
            className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input"
          >
            {availableProducts.map((product) => (
              <option key={product.num_produit} value={product.num_produit}>
                {product.design}
              </option>
            ))}
          </select>
          <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                  fill="#637381"
                ></path>
              </g>
            </svg>
          </span>
        </div>
      </div>
      <div className="w-full">
        <label className="mb-3 block text-black dark:text-white">
          Quantity
        </label>
        <input
          required
          type="number"
          name="qt"
          value={selectedProduct.qt}
          onChange={handleInputChange}
          placeholder="Product quantity"
          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>
      <div className="w-full">
        {index > 0 && (
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="mx-auto mt-10 flex h-10 w-10 items-center justify-center text-xl"
          >
            X
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductInput;
