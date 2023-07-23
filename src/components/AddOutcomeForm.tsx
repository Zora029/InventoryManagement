import React, { useState } from 'react';
import ProductInput from './ProductInput';
import { IProductInputData } from '../types/index';
import { productOptions } from '../database/index';

interface IAddOutcomeData {
  NumFacture: string;
  DateS: string;
  NomClient: string;
  products: IProductInputData[];
}

const AddOutcomeForm: React.FC = () => {
  const [formData, setFormData] = useState<IAddOutcomeData>({
    NumFacture: '',
    DateS: '',
    NomClient: '',
    products: [{ NumProduit: '', QtStk: 0 }],
  });

  const clearInput = () => {
    setFormData({
      NumFacture: '',
      DateS: '',
      NomClient: '',
      products: [{ NumProduit: '', QtStk: 0 }],
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProductChange = (
    index: number,
    selectedProduct: IProductInputData
  ) => {
    const updatedProducts = [...formData.products];
    updatedProducts[index] = selectedProduct;
    setFormData({ ...formData, products: updatedProducts });
  };

  const handleAddProduct = () => {
    setFormData({
      ...formData,
      products: [...formData.products, { NumProduit: '', QtStk: 0 }],
    });
  };

  const handleRemoveProduct = (index: number) => {
    const updatedProducts = formData.products.filter((_, idx) => idx !== index);
    setFormData({ ...formData, products: updatedProducts });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you can send the formData to the backend
    console.log(formData);
    clearInput();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
    >
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">Add Income</h3>
      </div>
      <div className="flex flex-row justify-between gap-2 px-6.5 py-4">
        <div className="w-full">
          <label className="mb-3 block text-black dark:text-white">
            Num Facture
          </label>
          <input
            required
            type="text"
            name="NumFacture"
            value={formData.NumFacture}
            onChange={handleInputChange}
            placeholder="Num Facturer"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="w-full">
          <label className="mb-3 block text-black dark:text-white">
            Outcome date
          </label>
          <input
            required
            type="date"
            name="DateS"
            value={formData.DateS}
            onChange={handleInputChange}
            className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="w-full">
          <label className="mb-3 block text-black dark:text-white">
            Client name
          </label>
          <input
            required
            type="text"
            name="NomClient"
            value={formData.NomClient}
            placeholder="Client name"
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
      </div>

      {formData.products.map((product, index) => (
        <ProductInput
          key={index}
          selectedProduct={product}
          availableProducts={productOptions}
          index={index}
          onChange={handleProductChange}
          onRemove={handleRemoveProduct}
        />
      ))}
      <button
        type="button"
        onClick={handleAddProduct}
        className="ml-6.5 mb-4 inline-flex items-center justify-center gap-2.5 rounded-md bg-primary py-2 px-5 text-center font-medium text-white hover:bg-opacity-90"
      >
        <span className="text-xl">+</span>Add Product
      </button>
      <button
        type="submit"
        className="mx-auto mb-4 flex w-[20%] justify-center rounded bg-primary p-3 font-medium text-gray"
      >
        Submit
      </button>
    </form>
  );
};

export default AddOutcomeForm;
