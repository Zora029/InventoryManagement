import React, { useEffect, useState } from 'react';

import ProductInput from './ProductInput';
import ConfirmBox from './MessageBox/ConfirmBox';
import SuccessBox from './MessageBox/SuccessBox';
import ErrorBox from './MessageBox/ErrorBox';

import {
  IProductInputData,
  IincomeFormProps,
  IAddIncomeData,
} from '../types/index';
import ProductTypes from '../types/ProductTypes';

import { getAllResources } from '../services/ProductCRUD';

const AddIncomeForm: React.FC<IincomeFormProps> = ({
  num_bon_livList,
  onSubmitForm,
}) => {
  const [formData, setFormData] = useState<IAddIncomeData>({
    num_bon_liv: '',
    DateEntree: '',
    nom_fournisseur: '',
    products: [{ num_produit: '', qt: 0 }],
  });
  const [isConfirmationModalOpen, setisConfirmationModalOpen] = useState(false);
  const [isSuccessModalOpen, setisSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setisErrorModalOpen] = useState(false);
  const [productOptions, setProductOptions] = useState<ProductTypes[]>([]);
  const [errorNumBonLiv, seterrorNumBonLiv] = useState<string>('');

  const clearInput = () => {
    setFormData({
      num_bon_liv: '',
      DateEntree: '',
      nom_fournisseur: '',
      products: [{ num_produit: '', qt: 0 }],
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name == 'num_bon_liv') {
      if (num_bon_livList.includes(value)) {
        seterrorNumBonLiv('This Num delivery voucher already exist !');
      } else {
        seterrorNumBonLiv('');
      }
    }
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
      products: [...formData.products, { num_produit: '', qt: 0 }],
    });
  };

  const handleRemoveProduct = (index: number) => {
    const updatedProducts = formData.products.filter((_, idx) => idx !== index);
    setFormData({ ...formData, products: updatedProducts });
  };

  const handleSubmit = () => {
    console.log('formData when submit on AddIncomeForm : ', formData);
    try {
      onSubmitForm(formData);
      setisSuccessModalOpen(true);
      clearInput();
    } catch (error) {
      setisErrorModalOpen(true);
    }
  };

  // Products Options
  const retrieveProductOptions = async () => {
    const data = await getAllResources();
    data.unshift({
      num_produit: '',
      design: '',
      quantite: 0,
      description: '',
      image: '',
    });
    setProductOptions(data);
  };

  // Mounted
  useEffect(() => {
    retrieveProductOptions();
  }, []);

  return (
    <form className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">Add Income</h3>
      </div>
      <div className="flex flex-row justify-between gap-2 px-6.5 py-4">
        <div className="relative w-full">
          <label className="mb-3 block text-black dark:text-white">
            Num delivery voucher
          </label>
          <input
            required
            type="text"
            name="num_bon_liv"
            value={formData.num_bon_liv}
            onChange={handleInputChange}
            placeholder="Num delivery voucher"
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
          {errorNumBonLiv && (
            <p className="absolute -bottom-4 text-xs font-bold text-danger">
              {errorNumBonLiv}
            </p>
          )}
        </div>
        <div className="w-full">
          <label className="mb-3 block text-black dark:text-white">
            Delivery date
          </label>
          <input
            required
            type="date"
            name="DateEntree"
            value={formData.DateEntree}
            onChange={handleInputChange}
            className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
        <div className="w-full">
          <label className="mb-3 block text-black dark:text-white">
            Provider name
          </label>
          <input
            required
            type="text"
            name="nom_fournisseur"
            value={formData.nom_fournisseur}
            placeholder="Provider name"
            onChange={handleInputChange}
            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
          />
        </div>
      </div>

      {formData.products.map((product, index) => (
        <ProductInput
          useMax={false}
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
        onClick={() => setisConfirmationModalOpen(true)}
        type="button"
        className="mx-auto mb-4 flex w-[20%] justify-center rounded bg-primary p-3 font-medium text-gray"
      >
        Submit
      </button>
      {isConfirmationModalOpen && (
        <ConfirmBox
          onConfirm={handleSubmit}
          setisOpen={setisConfirmationModalOpen}
        />
      )}
      {isSuccessModalOpen && <SuccessBox setisOpen={setisSuccessModalOpen} />}
      {isErrorModalOpen && <ErrorBox setisOpen={setisErrorModalOpen} />}
    </form>
  );
};

export default AddIncomeForm;
