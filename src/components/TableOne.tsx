import TableProductTypes from '../types/TableProductTypes';
import ProductTypes from '../types/ProductTypes';

import SearchBar from './SearchBar';

import EditIcon from './EditIcon';
import DeleteIcon from './DeleteIcon';

import { Link } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';

const TableOne: React.FC<TableProductTypes> = ({ products }) => {

  const navigate = useNavigate()

  const handleEdit = (num_produit:any) => {
    
    navigate(`/product/form/${num_produit}`)
  }
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex justify-between">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          List
        </h4>

        <div className='w-[20rem]'><SearchBar/></div>
        

        <Link 
        to='/product/form'
        className="inline-flex items-center justify-center gap-2.5 rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 w-[7rem] h-[3rem] cursor-pointer">
          <span className='text-2xl text-white'> + </span>
          Add
        </Link>
      </div>

      <div className='w-full mx-2 my-2 border-b-2 border-b-[#9e9d9d]'></div>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Identifiants
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Designation
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Quantite
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Unite
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Actions
            </h5>
          </div>
        </div>

        {products.map((product:ProductTypes, index:number) => (
          <div
            className="grid transform cursor-pointer grid-cols-3 border-b border-stroke bg-white transition-transform hover:scale-110 hover:shadow-lg dark:border-strokedark sm:grid-cols-5"
            key={index}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5 ">
              <p className="hidden text-black dark:text-white sm:block">
                {product.num_produit}
              </p>
              <div className="flex flex-shrink-0">
                <div className="h-[3rem] w-[3rem]">
                  <img
                    src={`/src/images/product/${product.image}`}
                    alt="Brand"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">
                {product.design}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{product.quantite}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">
                {product.description}
              </p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <div
                className='cursor-pointer' 
                onClick={() => handleEdit(product.num_produit)}>
                  <EditIcon />
              </div>
              
              <div className="mx-2"></div>
              <DeleteIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
