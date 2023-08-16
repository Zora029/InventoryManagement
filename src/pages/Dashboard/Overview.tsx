import { useEffect, useState } from 'react';

import CardOne from '../../components/CardOne.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import CardThree from '../../components/CardThree.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import TableTwo from '../../components/TableTwo.tsx';
import TableRequestedProducts from '../../components/TableRequestedProducts.tsx';
import OverviewOrdered from '../../components/OverviewOrdered.tsx';
import OverviewCommended from '../../components/OverviewCommended.tsx';

import { productCount } from '../../utils/productCount.ts';

import {
  getMostOrderedProducts,
  getMostOrderedProductsThisMonth,
  getMostCommandedProductsThisMonth,
} from '../../services/OverviewServices.ts';
import IncomeOutComeDataService from '../../services/IncomeOutComeDataService.ts';

import {
  ImostRequestedProduct,
  ImostRequestedProductThisMonth,
  ImostCommandedProductsThisMonth,
} from '../../types/index.ts';

const Overview = () => {
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);
  const [pro, setProducts] = useState(0);
  const [mostRequestedProduct, setmostRequestedProduct] = useState<
    ImostRequestedProduct[]
  >([
    {
      num_produit: '',
      product_name: '',
      ordered_quantity: 0,
    },
  ]);
  const [mostRequestedProductThisMonth, setmostRequestedProductThisMonth] =
    useState<ImostRequestedProductThisMonth[]>([
      {
        product_name: '',
        ordered_quantity: 0,
      },
    ]);
  const [mostCommandedProductsThisMonth, setmostCommandedProductsThisMonth] =
    useState<ImostCommandedProductsThisMonth[]>([
      {
        product_name: '',
        commanded_quantity: 0,
      },
    ]);

  // fetching the data
  const fetchResource = async () => {
    try {
      const response = await IncomeOutComeDataService.get();
      const data = response.data;

      const nbrProduct = await productCount();
      const nbrEntree = data.reduce((a: number, b: any) => a + b.nbrEntree, 0);
      const nbrSortie = data.reduce((a: number, b: any) => a + b.nbrSortie, 0);

      const mostOrderedProduct = await getMostOrderedProducts();
      console.log('Most Ordered (Sortie) : ', mostOrderedProduct);
      setmostRequestedProduct(mostOrderedProduct);

      const mostOrderedProductThisMonth =
        await getMostOrderedProductsThisMonth();
      console.log(
        'Most Ordered this month (Sortie) : ',
        mostOrderedProductThisMonth
      );
      setmostRequestedProductThisMonth(mostOrderedProductThisMonth);

      const mostCommmandedProductThisMonth =
        await getMostCommandedProductsThisMonth();
      console.log(
        'Most Commanded this month (Entree): ',
        mostCommmandedProductThisMonth
      );
      setmostCommandedProductsThisMonth(mostCommmandedProductThisMonth);

      setIncome(nbrEntree);
      setOutcome(nbrSortie);
      setProducts(nbrProduct);
    } catch (error) {
      console.log('Erreur ' + error);
    }
  };

  useEffect(() => {
    fetchResource();
  }, []);

  return (
    <div className="flex gap-7.5">
      <div className="w-[75%]">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
          <CardOne totalIncome={income} />
          <CardTwo totalOutcome={outcome} />
          <CardThree totalProduct={pro} />
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
          <TableRequestedProducts data={mostRequestedProduct} />
        </div>
      </div>

      {/* right section */}
      <div className="w-[calc(25%-7.5px)] flex-col gap-5">
        <OverviewOrdered data={mostRequestedProductThisMonth} />

        <OverviewCommended data={mostCommandedProductsThisMonth} />
      </div>
    </div>
  );
};

export default Overview;
