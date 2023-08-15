import CardOne from '../../components/CardOne.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import CardThree from '../../components/CardThree.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import TableTwo from '../../components/TableTwo.tsx';
import TableRequestedProducts from '../../components/TableRequestedProducts.tsx';
import OverviewOrdered from '../../components/OverviewOrdered.tsx';
import OverviewCommended from '../../components/OverviewCommended.tsx';

//! Every component fetch data they need

interface Iinformation {
  totalIncome: number;
  totalIncomeAgo: number;
  totalOutcome: number;
  totalOutcomeAgo: number;
  totalProduct: number;
  totalProductAgo: number;
}

const Overview = () => {
  const information: Iinformation = {
    totalIncome: 3000,
    totalIncomeAgo: 4000,
    totalOutcome: 2000,
    totalOutcomeAgo: 1750,
    totalProduct: 69,
    totalProductAgo: 50,
  };
  return (
    <div className="flex gap-7.5">
      <div className='w-[75%]'>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
          <CardOne
            totalIncome={information.totalIncome}
            totalIncomeAgo={information.totalIncomeAgo}
          />
          <CardTwo
            totalOutcome={information.totalOutcome}
            totalOutcomeAgo={information.totalOutcomeAgo}
          />
          <CardThree
            totalProduct={information.totalProduct}
            totalProductAgo={information.totalProductAgo}
          />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <ChartOne />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          {/* Recent activities */}
          <TableTwo />
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          {/* Most requested product */}
          <TableRequestedProducts />
        </div>
      </div>

      {/* right section */}
      <div className='w-[calc(25%-7.5px)] flex-col gap-5'>
        <OverviewOrdered />

        <OverviewCommended />

      </div>
    </div>
  );
};

export default Overview;
