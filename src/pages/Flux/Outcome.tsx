import { useEffect, useState } from 'react';

import AddOutcomeForm from '../../components/AddOutcomeForm';
import Breadcrumb from '../../components/Breadcrumb';
import FluxTableOutcome from '../../components/FluxTableOutcome';

import { IAddOutcomeData, IoutcomeTableData } from '../../types';

import { createOutcome, getAllOutcomes } from '../../services/FluxServices';

const Outcome = () => {
  // Data
  const headers: string[] = [
    'Num Facture',
    'Outcome date',
    'Client name',
    'Num Product',
    'design',
    'Quantity',
  ];
  const [outcomeTableData, setoutcomeTableData] = useState<IoutcomeTableData[]>(
    [
      {
        num_facture: '',
        dateSortie: '',
        nom_client: '',
        num_produit: '',
        design: '',
        quantite_sortie: 0,
      },
    ]
  );
  const [num_factureList, setnum_factureList] = useState<string[]>([]);

  // Functions
  const retrieveOutcomeTableData = async () => {
    // Recuperation des donnees de la table
    const response: IoutcomeTableData[] = await getAllOutcomes();

    // Mise a jour des donnees de la table
    setoutcomeTableData(response.reverse());

    setnum_factureList(response.map((item) => item.num_facture));
  };

  const handleFormSubmit = async (formData: IAddOutcomeData) => {
    // Envoie des données
    await createOutcome(formData);

    // Mise a jour des donnees
    retrieveOutcomeTableData();
  };

  // Mounted
  useEffect(() => {
    retrieveOutcomeTableData();
  }, []);
  return (
    <>
      <Breadcrumb pageName="Outcomes" />

      <div className="mb-[5rem] grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          {/* <!-- Add Outcome --> */}
          <AddOutcomeForm
            onSubmitForm={handleFormSubmit}
            num_factureList={num_factureList}
          />
          <FluxTableOutcome headers={headers} data={outcomeTableData} />
        </div>
      </div>
    </>
  );
};

export default Outcome;
