import { IoutcomeTableProps } from '../types';
const FluxTableOutcome = ({ headers, data }: IoutcomeTableProps) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto text-center">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {headers.map((e, index) => (
                <th
                  key={index}
                  className="min-w-[155px] py-3 px-1 font-medium text-black dark:text-white xl:pl-11"
                >
                  {e}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((e, index) => (
              <tr
                key={index}
                className="transition-all duration-300 hover:bg-gray-2 hover:shadow-md dark:hover:bg-meta-4"
              >
                <td className="border-b border-[#eee] py-3 px-1 text-black dark:border-strokedark dark:text-white">
                  {e.num_facture}
                </td>
                <td className="border-b border-[#eee] py-3 px-1 text-black dark:border-strokedark dark:text-white">
                  {e.dateSortie}
                </td>
                <td className="border-b border-[#eee] py-3 px-1 text-black dark:border-strokedark dark:text-white">
                  {e.nom_client}
                </td>
                <td className="border-b border-[#eee] py-3 px-1 text-black dark:border-strokedark dark:text-white">
                  {e.num_produit}
                </td>
                <td className="border-b border-[#eee] py-3 px-1 text-black dark:border-strokedark dark:text-white">
                  {e.design}
                </td>
                <td className="border-b border-[#eee] py-3 px-1 text-black dark:border-strokedark dark:text-white">
                  {e.quantite_sortie}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FluxTableOutcome;
