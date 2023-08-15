import CardOne from '../../components/CardOne.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import CardThree from '../../components/CardThree.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import TableTwo from '../../components/TableTwo.tsx';
import TableRequestedProducts from '../../components/TableRequestedProducts.tsx';
import OverviewOrdered from '../../components/OverviewOrdered.tsx';
import OverviewCommended from '../../components/OverviewCommended.tsx';
import { useEffect, useState } from 'react';

import IncomeOutComeDataService from '../../services/IncomeOutComeDataService.ts';
import { productCount } from '../../utils/productCount.ts';

import { getCurrentMonthObject } from '../../utils/OverviewUtil.ts';

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

  // const information: Iinformation = {
  //   totalIncome: 3000,
  //   totalIncomeAgo: 4000,
  //   totalOutcome: 2000,
  //   totalOutcomeAgo: 1750,
  //   totalProduct: 69,
  //   totalProductAgo: 50,
  // };

  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);
  const [pro, setProducts] = useState(0);

  // fetching the data
  const fetchResource = async () => {
    try {
      const response = await IncomeOutComeDataService.get();
      const data = response.data; 
      const thisMonth = getCurrentMonthObject(data);
      
      const nbrProduct = await productCount();
      setIncome(thisMonth.nbrEntree);
      setOutcome(thisMonth.nbrSortie);
      setProducts(nbrProduct);
    } catch (error) {
      console.log("Erreur " + error);
    }
  }

  useEffect( () => {
    fetchResource()
  }, [])

  return (
    <div className="flex gap-7.5">
      <div className='w-[75%]'>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
          <CardOne
            totalIncome={income}
          />
          <CardTwo
            totalOutcome={outcome}
          />
          <CardThree
            totalProduct={pro}
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
