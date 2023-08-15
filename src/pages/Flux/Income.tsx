import { useEffect, useState } from 'react';

import Breadcrumb from '../../components/Breadcrumb';
import AddIncomeForm from '../../components/AddIncomeForm';
import FluxTableIncome from '../../components/FluxTableIncome';

import { IincomeTableData, IAddIncomeData } from '../../types/index';

import { createIncome, getAllIncomes } from '../../services/FluxServices';

const Income = () => {
  // Data
  const headers: string[] = [
    'Num delivery voucher',
    'Delivery date',
    'Provider name',
    'Num Product',
    'design',
    'Quantity',
  ];
  const [incomeTableData, setincomeTableData] = useState<IincomeTableData[]>([
    {
      num_bon_liv: '',
      dateEntree: '',
      nom_fournisseur: '',
      num_produit: '',
      design: '',
      quantite_entree: 0,
    },
  ]);
  const [num_bon_livList, setnum_bon_livList] = useState<string[]>([]);

  // Functions
  const retrieveIncomeTableData = async () => {
    // Recuperation des donnees de la table
    const response: IincomeTableData[] = await getAllIncomes();

    // Mise a jour des donnees de la table
    setincomeTableData(response);

    setnum_bon_livList(response.map((item) => item.num_bon_liv));
  };

  const handleFormSubmit = async (formData: IAddIncomeData) => {
    // Envoie des données
    await createIncome(formData);

    // Mise a jour des donnees
    retrieveIncomeTableData();
  };

  // Mounted
  useEffect(() => {
    retrieveIncomeTableData();
  }, []);
  return (
    <>
      <Breadcrumb pageName="Incomes" />

      <div className="mb-[5rem] grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          {/* <!-- Add Income --> */}
          <AddIncomeForm
            onSubmitForm={handleFormSubmit}
            num_bon_livList={num_bon_livList}
          />
          <FluxTableIncome headers={headers} data={incomeTableData} />
        </div>
      </div>
    </>
  );
};

export default Income;
