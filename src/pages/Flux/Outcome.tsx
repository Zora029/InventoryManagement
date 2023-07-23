import AddOutcomeForm from '../../components/AddOutcomeForm';
import Breadcrumb from '../../components/Breadcrumb';
import FluxTableOutcome from '../../components/FluxTableOutcome';
import { outcomeTableData } from '../../database';
const Outcome = () => {
  const headers: string[] = [
    'Num Facture',
    'Outcome date',
    'Client name',
    'Num Product',
    'Design',
    'Quantity',
  ];
  return (
    <>
      <Breadcrumb pageName="Outcomes" />

      <div className="mb-[5rem] grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          {/* <!-- Add Outcome --> */}
          <AddOutcomeForm />
          <FluxTableOutcome headers={headers} data={outcomeTableData} />
        </div>
      </div>
    </>
  );
};

export default Outcome;
