import { useState } from 'react';
import AddIncomeForm from '../../components/AddIncomeForm';
import Breadcrumb from '../../components/Breadcrumb';
import FluxTableIncome from '../../components/FluxTableIncome';
import { IincomeTableData } from '../../types';
// import { incomeTableData } from '../../database';
const Income = () => {
  const headers: string[] = [
    'Num delivery voucher',
    'Delivery date',
    'Provider name',
    'Num Product',
    'Design',
    'Quantity',
  ];
  const [incomeTableData, setincomeTableData] = useState<IincomeTableData[]>([
    {
      NumBonLiv: 'B001',
      DateE: '2023-02-02',
      NomFournisseur: 'Ralay',
      NumProduit: 'P001',
      Design: 'Lenovo G580',
      QtStk: 69,
    },
    {
      NumBonLiv: 'B001',
      DateE: '2023-02-02',
      NomFournisseur: 'Ralay',
      NumProduit: 'P002',
      Design: 'Dell Latitude',
      QtStk: 50,
    },
    {
      NumBonLiv: 'B001',
      DateE: '2023-02-02',
      NomFournisseur: 'Ralay',
      NumProduit: 'P003',
      Design: 'HP Probook',
      QtStk: 22,
    },
  ]);
  return (
    <>
      <Breadcrumb pageName="Incomes" />

      <div className="mb-[5rem] grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          {/* <!-- Add Income --> */}
          <AddIncomeForm
            currentIncomeTableData={incomeTableData}
            onSubmit={setincomeTableData}
          />
          <FluxTableIncome headers={headers} data={incomeTableData} />
        </div>
      </div>
    </>
  );
};

export default Income;
